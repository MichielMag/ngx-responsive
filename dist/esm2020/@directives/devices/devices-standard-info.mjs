import { __decorate, __param } from "tslib";
/**
 * @name devices-standard-info
 * @description Devices standard abstract class in ngx-responsive
 *
 * @license MIT
 */
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { distinctUntilChanged } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';
let DeviceStandardInfo = class DeviceStandardInfo {
    constructor(_responsiveState, _platformId) {
        this._responsiveState = _responsiveState;
        this._platformId = _platformId;
        this._isBrowser = null;
        this.replaySubject$ = new ReplaySubject();
        this._isBrowser = isPlatformBrowser(this._platformId);
    }
    connect() {
        if (this._isBrowser) {
            this._subscription = this._responsiveState.standard$.pipe(distinctUntilChanged())
                .subscribe((data) => {
                this._updateData(data);
            });
        }
        return this.replaySubject$.asObservable();
    }
    disconnect() {
        if (this._isBrowser) {
            this._subscription.unsubscribe();
        }
    }
    get getStandardDevice() {
        return this.replaySubject$.asObservable();
    }
    _updateData(value) {
        this.replaySubject$.next(value);
    }
};
DeviceStandardInfo = __decorate([
    __param(1, Inject(PLATFORM_ID))
], DeviceStandardInfo);
export { DeviceStandardInfo };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2aWNlcy1zdGFuZGFyZC1pbmZvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL0BkaXJlY3RpdmVzL2RldmljZXMvZGV2aWNlcy1zdGFuZGFyZC1pbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRztBQUNILE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFNckMsSUFBc0Isa0JBQWtCLEdBQXhDLE1BQXNCLGtCQUFrQjtJQUtwQyxZQUF1QixnQkFBaUMsRUFDckIsV0FBVztRQUR2QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBQ3JCLGdCQUFXLEdBQVgsV0FBVyxDQUFBO1FBSHRDLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFDNUIsbUJBQWMsR0FBdUIsSUFBSSxhQUFhLEVBQUUsQ0FBQztRQUk1RCxJQUFJLENBQUMsVUFBVSxHQUFHLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBQ00sT0FBTztRQUNWLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNqQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7aUJBQ2hGLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUNoQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNCLENBQUMsQ0FBQyxDQUFDO1NBQ047UUFDRCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDOUMsQ0FBQztJQUNNLFVBQVU7UUFDYixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDakIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNwQztJQUNMLENBQUM7SUFDRCxJQUFJLGlCQUFpQjtRQUNqQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDOUMsQ0FBQztJQUNTLFdBQVcsQ0FBRSxLQUFVO1FBQzdCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Q0FDSixDQUFBO0FBOUJxQixrQkFBa0I7SUFNL0IsV0FBQSxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUE7R0FOTixrQkFBa0IsQ0E4QnZDO1NBOUJxQixrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQG5hbWUgZGV2aWNlcy1zdGFuZGFyZC1pbmZvXHJcbiAqIEBkZXNjcmlwdGlvbiBEZXZpY2VzIHN0YW5kYXJkIGFic3RyYWN0IGNsYXNzIGluIG5neC1yZXNwb25zaXZlXHJcbiAqXHJcbiAqIEBsaWNlbnNlIE1JVFxyXG4gKi9cclxuaW1wb3J0IHsgUExBVEZPUk1fSUQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBSZXNwb25zaXZlU3RhdGUgfSBmcm9tICcuLi8uLi9AY29yZS9wcm92aWRlcnMvcmVzcG9uc2l2ZS1zdGF0ZS9yZXNwb25zaXZlLXN0YXRlJztcclxuXHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRGV2aWNlU3RhbmRhcmRJbmZvIHtcclxuICAgIHB1YmxpYyBjdXJyZW50c3RhdGU6IHN0cmluZztcclxuICAgIHByaXZhdGUgX3N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gICAgcHJpdmF0ZSBfaXNCcm93c2VyOiBib29sZWFuID0gbnVsbDtcclxuICAgIHB1YmxpYyByZXBsYXlTdWJqZWN0JDogUmVwbGF5U3ViamVjdDxhbnk+ID0gbmV3IFJlcGxheVN1YmplY3QoKTtcclxuICAgIGNvbnN0cnVjdG9yKCBwcm90ZWN0ZWQgX3Jlc3BvbnNpdmVTdGF0ZTogUmVzcG9uc2l2ZVN0YXRlLFxyXG4gICAgICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByb3RlY3RlZCBfcGxhdGZvcm1JZFxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5faXNCcm93c2VyID0gaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5fcGxhdGZvcm1JZCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgY29ubmVjdCgpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIGlmICh0aGlzLl9pc0Jyb3dzZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uID0gdGhpcy5fcmVzcG9uc2l2ZVN0YXRlLnN0YW5kYXJkJC5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZURhdGEoZGF0YSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5yZXBsYXlTdWJqZWN0JC5hc09ic2VydmFibGUoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBkaXNjb25uZWN0KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl9pc0Jyb3dzZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0IGdldFN0YW5kYXJkRGV2aWNlKCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVwbGF5U3ViamVjdCQuYXNPYnNlcnZhYmxlKCk7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgX3VwZGF0ZURhdGEoIHZhbHVlOiBhbnkgKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yZXBsYXlTdWJqZWN0JC5uZXh0KHZhbHVlKTtcclxuICAgIH1cclxufVxyXG4iXX0=