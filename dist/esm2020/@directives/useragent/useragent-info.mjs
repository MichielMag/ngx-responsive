import { __decorate, __param } from "tslib";
/**
 * @name useragent-info
 * @description User agent info abstract class in ngx-responsive
 *
 * @license MIT
 */
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { distinctUntilChanged } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';
let UserAgentInfo = class UserAgentInfo {
    constructor(_responsiveState, _platformId) {
        this._responsiveState = _responsiveState;
        this._platformId = _platformId;
        this.replaySubject$ = new ReplaySubject();
        this._isBrowser = null;
        this._isBrowser = isPlatformBrowser(this._platformId);
    }
    connect() {
        if (this._isBrowser) {
            this._subscription = this._responsiveState.userAgent$.pipe(distinctUntilChanged())
                .subscribe((data) => {
                this._emitUserAgent(data);
            });
        }
        return this.replaySubject$.asObservable();
    }
    disconnect() {
        if (this._isBrowser) {
            this._subscription.unsubscribe();
        }
    }
    get getUserAgent() {
        return this.replaySubject$.asObservable();
    }
    _emitUserAgent(value) {
        this.replaySubject$.next(value);
    }
};
UserAgentInfo = __decorate([
    __param(1, Inject(PLATFORM_ID))
], UserAgentInfo);
export { UserAgentInfo };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcmFnZW50LWluZm8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGRpcmVjdGl2ZXMvdXNlcmFnZW50L3VzZXJhZ2VudC1pbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRztBQUNILE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFLckMsSUFBc0IsYUFBYSxHQUFuQyxNQUFzQixhQUFhO0lBSS9CLFlBQW1CLGdCQUFpQyxFQUNqQixXQUFXO1FBRDNCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFDakIsZ0JBQVcsR0FBWCxXQUFXLENBQUE7UUFKdkMsbUJBQWMsR0FBdUIsSUFBSSxhQUFhLEVBQUUsQ0FBQztRQUN4RCxlQUFVLEdBQVksSUFBSSxDQUFDO1FBSy9CLElBQUksQ0FBQyxVQUFVLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFDTSxPQUFPO1FBQ1YsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztpQkFDN0UsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEMsQ0FBQyxDQUFDLENBQUM7U0FDTjtRQUNELE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM5QyxDQUFDO0lBQ00sVUFBVTtRQUNiLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNqQixJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3BDO0lBQ0wsQ0FBQztJQUNELElBQUksWUFBWTtRQUNaLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM5QyxDQUFDO0lBQ1MsY0FBYyxDQUFDLEtBQVU7UUFDL0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQztDQUNKLENBQUE7QUE3QnFCLGFBQWE7SUFLMUIsV0FBQSxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUE7R0FMTixhQUFhLENBNkJsQztTQTdCcUIsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbmFtZSB1c2VyYWdlbnQtaW5mb1xyXG4gKiBAZGVzY3JpcHRpb24gVXNlciBhZ2VudCBpbmZvIGFic3RyYWN0IGNsYXNzIGluIG5neC1yZXNwb25zaXZlXHJcbiAqXHJcbiAqIEBsaWNlbnNlIE1JVFxyXG4gKi9cclxuaW1wb3J0IHsgUExBVEZPUk1fSUQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBSZXNwb25zaXZlU3RhdGUgfSBmcm9tICcuLi8uLi9AY29yZS9wcm92aWRlcnMvcmVzcG9uc2l2ZS1zdGF0ZS9yZXNwb25zaXZlLXN0YXRlJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBVc2VyQWdlbnRJbmZvIHtcclxuICAgIHB1YmxpYyByZXBsYXlTdWJqZWN0JDogUmVwbGF5U3ViamVjdDxhbnk+ID0gbmV3IFJlcGxheVN1YmplY3QoKTtcclxuICAgIHByaXZhdGUgX2lzQnJvd3NlcjogYm9vbGVhbiA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9zdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBfcmVzcG9uc2l2ZVN0YXRlOiBSZXNwb25zaXZlU3RhdGUsXHJcbiAgICAgICAgQEluamVjdChQTEFURk9STV9JRCkgcHJvdGVjdGVkIF9wbGF0Zm9ybUlkXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLl9pc0Jyb3dzZXIgPSBpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLl9wbGF0Zm9ybUlkKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBjb25uZWN0KCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzQnJvd3Nlcikge1xyXG4gICAgICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb24gPSB0aGlzLl9yZXNwb25zaXZlU3RhdGUudXNlckFnZW50JC5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZW1pdFVzZXJBZ2VudChkYXRhKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnJlcGxheVN1YmplY3QkLmFzT2JzZXJ2YWJsZSgpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGRpc2Nvbm5lY3QoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzQnJvd3Nlcikge1xyXG4gICAgICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQgZ2V0VXNlckFnZW50KCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVwbGF5U3ViamVjdCQuYXNPYnNlcnZhYmxlKCk7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgX2VtaXRVc2VyQWdlbnQodmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucmVwbGF5U3ViamVjdCQubmV4dCh2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuIl19