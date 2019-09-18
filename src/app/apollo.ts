import { Subscription } from 'apollo-client/util/Observable';
import { OnDestroy } from '@angular/core';
import { BigNumber } from 'bignumber.js';
import { timer } from '../betokenjs/helpers';
import { isNullOrUndefined } from 'util';

export class ApolloEnabled implements OnDestroy {
  querySubscription: Subscription;
  query: any;

  constructor() {
  }

  ngOnDestroy() {
    if (!isNullOrUndefined(this.querySubscription)) {
      this.querySubscription.unsubscribe();
    }
  }

  toBigNumber(n) {
    return new BigNumber(n);
  }

  toDateTimeString(unixTimestamp) {
    return new Date(+unixTimestamp * 1e3).toLocaleString();
  }

  toDateString(unixTimestamp) {
    return new Date(+unixTimestamp * 1e3).toLocaleDateString();
  }

  toDateObject(unixTimestamp) {
    return new Date(+unixTimestamp * 1e3);
  }

  getManagerKairoBalance(managerData) {
    if (timer.phase() == 0) {
      return new BigNumber(managerData.kairoBalance);
    } else {
      return new BigNumber(managerData.kairoBalanceWithStake);
    }
  }
}