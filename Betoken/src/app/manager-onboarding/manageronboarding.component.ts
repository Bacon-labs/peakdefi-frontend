import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { isUndefined } from 'util';
import BigNumber from 'bignumber.js';

import { } from 'jquery';
declare var $: any;

import {
  user, timer, stats, tokens, manager_actions
} from '../../betokenjs/helpers';

@Component({
  selector: 'app-account',
  templateUrl: './manageronboarding.component.html'
})
export class ManageronboardingComponent implements OnInit {
  ZERO_ADDR = '0x0000000000000000000000000000000000000000';
  tokenData: Array<Object>;
  user_address: String;
  checkboxes: Array<boolean>;
  selectedTokenSymbol: String;
  selectedTokenBalance: BigNumber;
  transactionId: String;
  kairoPrice: BigNumber;
  buyKairoAmount: BigNumber;
  buyTokenAmount: BigNumber;
  kairoBalance: BigNumber;

  buyStep: Number;
  days: Number;
  hours: Number;
  minutes: Number;
  seconds: Number;
  phase: Number;

  constructor(private ms: AppComponent, private router: Router) {
    this.user_address = this.ZERO_ADDR;
    this.buyStep = 0;
    this.checkboxes = [false, false, false];
    this.selectedTokenSymbol = '';
    this.selectedTokenBalance = new BigNumber(0);
    this.transactionId = '';
    this.kairoPrice = new BigNumber(0);
    this.buyKairoAmount = new BigNumber(0);
    this.buyTokenAmount = new BigNumber(0);
    this.kairoBalance = new BigNumber(0);

    this.days = 0;
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.phase = 0;
  }

  ngOnInit() {
    setInterval(() => {
      this.refreshDisplay();
    }, 100);
    $('[data-toggle="tooltip"]').tooltip();
    $('#modalBuy').on('hidden.bs.modal', () => {
      this.resetModals();
    });
    this.tokenData = tokens.token_data().get();
    this.selectedTokenSymbol = this.tokenData[0]['symbol'];
  }

  refreshDisplay() {
    this.user_address = user.address();
    this.kairoPrice = stats.kairo_price();
    this.kairoBalance = user.kairo_balance();

    this.days = timer.day();
    this.hours = timer.hour();
    this.minutes = timer.minute();
    this.seconds = timer.second();
    this.phase = timer.phase();

    this.getTokenBalance(this.selectedTokenSymbol);
  }

  resetModals() {
    this.buyStep = 0;
    this.selectedTokenSymbol = this.tokenData[0]['symbol'];
    this.checkboxes = [false, false, false];
  }

  refreshBuyOrderDetails(val) {
    this.buyTokenAmount = new BigNumber(val);
    if (!this.buyTokenAmount.isNaN()) {
      this.buyKairoAmount = this.buyTokenAmount.times(this.assetSymbolToPrice(this.selectedTokenSymbol)).div(this.kairoPrice);
    }
  }

  maxBuyAmount() {
    $('#sharesAmountToBuy').val(this.selectedTokenBalance.toString());
    this.refreshBuyOrderDetails(this.selectedTokenBalance);
  }

  selectBuyToken(value) {
    this.selectedTokenSymbol = value;
    $('#sharesAmountToBuy').val('0');
    this.refreshBuyOrderDetails(0);
  }

  async getTokenBalance(token) {
    this.selectedTokenBalance = await user.token_balance(token);
  }

  register() {
    this.buyStep = 2;
    var payAmount = this.buyTokenAmount;
    let pending = (txHash) => {
      if (this.buyStep == 2) {
        this.transactionId = txHash;
        this.buyStep = 3;
      }
    };
    let confirm = () => {
      if (this.buyStep == 3) {
        this.buyStep = 4;
      }
    };
    switch (this.selectedTokenSymbol) {
      case 'ETH':
        manager_actions.register_with_ETH(payAmount, pending, confirm);
        break;
      case 'DAI':
        manager_actions.register_with_DAI(payAmount, pending, confirm);
        break;
      default:
        manager_actions.register_with_token(payAmount, this.selectedTokenSymbol, pending, confirm);
        break;
    }
  }

  assetSymbolToPrice(symbol) {
    return tokens.asset_symbol_to_price(symbol);
  }

  getTokenName(token) {
    let result = tokens.asset_symbol_to_name(token);
    if (isUndefined(result)) {
      return '';
    }
    return result;
  }

  checkRouterURL(route) {
    return this.router.url === route;
  }

  agreementsChecked() {
    for (var checked of this.checkboxes) {
      if (!checked) {
        return false;
      }
    }
    return true;
  }
}