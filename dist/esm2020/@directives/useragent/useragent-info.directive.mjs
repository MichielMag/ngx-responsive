/**
 * @name useragent-info.directive
 * @description Useragent info directive in ngx-responsive
 *
 * @license MIT
 */
import { Output, EventEmitter, Directive } from '@angular/core';
import { UserAgentInfo } from './useragent-info';
import * as i0 from "@angular/core";
import * as i1 from "../../@core/providers/responsive-state/responsive-state";
import * as i2 from "../../@core/providers/platform-service/platform.service";
export class UserAgentInfoDirective extends UserAgentInfo {
    constructor(_responsiveState, cd, platformService) {
        super(_responsiveState, platformService);
        this._responsiveState = _responsiveState;
        this.cd = cd;
        this.info = new EventEmitter();
    }
    ngOnInit() {
        this.connect();
    }
    ngOnDestroy() {
        this.disconnect();
    }
    _emitUserAgent(value) {
        this.info.emit(value);
        this.cd.markForCheck();
    }
}
UserAgentInfoDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: UserAgentInfoDirective, deps: [{ token: i1.ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: i2.PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
UserAgentInfoDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: UserAgentInfoDirective, selector: "user-agent-info", outputs: { info: "info" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: UserAgentInfoDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'user-agent-info'
                }]
        }], ctorParameters: function () { return [{ type: i1.ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: i2.PlatformService }]; }, propDecorators: { info: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcmFnZW50LWluZm8uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL0BkaXJlY3RpdmVzL3VzZXJhZ2VudC91c2VyYWdlbnQtaW5mby5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0dBS0c7QUFDSCxPQUFPLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQXVDLE1BQU0sZUFBZSxDQUFDO0FBR3JHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7OztBQU9qRCxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsYUFBYTtJQUVyRCxZQUNXLGdCQUFpQyxFQUNqQyxFQUFxQixFQUM1QixlQUFnQztRQUNoQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFIbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUNqQyxPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUh0QixTQUFJLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUFLVCxDQUFDO0lBQ3hDLFFBQVE7UUFDWCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUNNLFdBQVc7UUFDZCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUNTLGNBQWMsQ0FBRyxLQUFVO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFFLEtBQUssQ0FBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7bUhBaEJRLHNCQUFzQjt1R0FBdEIsc0JBQXNCOzJGQUF0QixzQkFBc0I7a0JBSmxDLFNBQVM7bUJBQ1Y7b0JBQ0ksUUFBUSxFQUFFLGlCQUFpQjtpQkFDOUI7b0tBRWEsSUFBSTtzQkFBYixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBuYW1lIHVzZXJhZ2VudC1pbmZvLmRpcmVjdGl2ZVxyXG4gKiBAZGVzY3JpcHRpb24gVXNlcmFnZW50IGluZm8gZGlyZWN0aXZlIGluIG5neC1yZXNwb25zaXZlXHJcbiAqXHJcbiAqIEBsaWNlbnNlIE1JVFxyXG4gKi9cclxuaW1wb3J0IHsgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIERpcmVjdGl2ZSwgT25Jbml0LCBPbkRlc3Ryb3ksIENoYW5nZURldGVjdG9yUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFJlc3BvbnNpdmVTdGF0ZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3Byb3ZpZGVycy9yZXNwb25zaXZlLXN0YXRlL3Jlc3BvbnNpdmUtc3RhdGUnO1xyXG5pbXBvcnQgeyBVc2VyQWdlbnRJbmZvIH0gZnJvbSAnLi91c2VyYWdlbnQtaW5mbyc7XHJcbmltcG9ydCB7IFBsYXRmb3JtU2VydmljZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3Byb3ZpZGVycy9wbGF0Zm9ybS1zZXJ2aWNlL3BsYXRmb3JtLnNlcnZpY2UnO1xyXG5cclxuQERpcmVjdGl2ZShcclxue1xyXG4gICAgc2VsZWN0b3I6ICd1c2VyLWFnZW50LWluZm8nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVc2VyQWdlbnRJbmZvRGlyZWN0aXZlIGV4dGVuZHMgVXNlckFnZW50SW5mbyBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAgIEBPdXRwdXQoKSBpbmZvOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyBfcmVzcG9uc2l2ZVN0YXRlOiBSZXNwb25zaXZlU3RhdGUsXHJcbiAgICAgICAgcHVibGljIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgICAgICBwbGF0Zm9ybVNlcnZpY2U6IFBsYXRmb3JtU2VydmljZVxyXG4gICAgKSB7IHN1cGVyKF9yZXNwb25zaXZlU3RhdGUsIHBsYXRmb3JtU2VydmljZSk7IH1cclxuICAgIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNvbm5lY3QoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRpc2Nvbm5lY3QoKTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBfZW1pdFVzZXJBZ2VudCAoIHZhbHVlOiBhbnkgKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pbmZvLmVtaXQoIHZhbHVlICk7XHJcbiAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH1cclxufVxyXG4iXX0=