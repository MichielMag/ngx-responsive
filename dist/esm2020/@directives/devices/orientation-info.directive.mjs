/**
 * @name orientation-info.directive
 * @description Device orientation directive in ngx-responsive
 *
 * @license MIT
 */
import { EventEmitter, Directive, Output } from '@angular/core';
import { OrientationInfo } from './orientation-info';
import * as i0 from "@angular/core";
import * as i1 from "../../@core/providers/responsive-state/responsive-state";
import * as i2 from "../../@core/providers/platform-service/platform.service";
export class OrientationInfoDirective extends OrientationInfo {
    constructor(_responsiveState, viewContainer, cd, platformService) {
        super(_responsiveState, platformService);
        this._responsiveState = _responsiveState;
        this.viewContainer = viewContainer;
        this.cd = cd;
        this.orientation = new EventEmitter();
    }
    ngOnInit() {
        this.connect();
    }
    ngOnDestroy() {
        this.disconnect();
    }
    _updateData(value) {
        this.orientation.emit(value);
        this.cd.markForCheck();
    }
}
OrientationInfoDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: OrientationInfoDirective, deps: [{ token: i1.ResponsiveState }, { token: i0.ViewContainerRef }, { token: i0.ChangeDetectorRef }, { token: i2.PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
OrientationInfoDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: OrientationInfoDirective, selector: "orientation-info", outputs: { orientation: "orientation" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: OrientationInfoDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'orientation-info' }]
        }], ctorParameters: function () { return [{ type: i1.ResponsiveState }, { type: i0.ViewContainerRef }, { type: i0.ChangeDetectorRef }, { type: i2.PlatformService }]; }, propDecorators: { orientation: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JpZW50YXRpb24taW5mby5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGRpcmVjdGl2ZXMvZGV2aWNlcy9vcmllbnRhdGlvbi1pbmZvLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7R0FLRztBQUNILE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBMEQsTUFBTSxlQUFlLENBQUM7QUFHeEgsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7O0FBSXJELE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxlQUFlO0lBRXpELFlBQXNCLGdCQUFpQyxFQUN6QyxhQUErQixFQUMvQixFQUFxQixFQUMvQixlQUFnQztRQUNoQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFKdkIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUN6QyxrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFDL0IsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFIbEIsZ0JBQVcsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUt2QixDQUFDO0lBQy9DLFFBQVE7UUFDSixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUNELFdBQVc7UUFDUCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUNTLFdBQVcsQ0FBQyxLQUFVO1FBQzVCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7cUhBaEJRLHdCQUF3Qjt5R0FBeEIsd0JBQXdCOzJGQUF4Qix3QkFBd0I7a0JBRHBDLFNBQVM7bUJBQUMsRUFBRSxRQUFRLEVBQUUsa0JBQWtCLEVBQUU7bU1BRXRCLFdBQVc7c0JBQTNCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQG5hbWUgb3JpZW50YXRpb24taW5mby5kaXJlY3RpdmVcclxuICogQGRlc2NyaXB0aW9uIERldmljZSBvcmllbnRhdGlvbiBkaXJlY3RpdmUgaW4gbmd4LXJlc3BvbnNpdmVcclxuICpcclxuICogQGxpY2Vuc2UgTUlUXHJcbiAqL1xyXG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIsIERpcmVjdGl2ZSwgT3V0cHV0LCBWaWV3Q29udGFpbmVyUmVmLCBPbkluaXQsIE9uRGVzdHJveSwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFJlc3BvbnNpdmVTdGF0ZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3Byb3ZpZGVycy9yZXNwb25zaXZlLXN0YXRlL3Jlc3BvbnNpdmUtc3RhdGUnO1xyXG5pbXBvcnQgeyBPcmllbnRhdGlvbkluZm8gfSBmcm9tICcuL29yaWVudGF0aW9uLWluZm8nO1xyXG5pbXBvcnQgeyBQbGF0Zm9ybVNlcnZpY2UgfSBmcm9tICcuLi8uLi9AY29yZS9wcm92aWRlcnMvcGxhdGZvcm0tc2VydmljZS9wbGF0Zm9ybS5zZXJ2aWNlJztcclxuXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ29yaWVudGF0aW9uLWluZm8nIH0pXHJcbmV4cG9ydCBjbGFzcyBPcmllbnRhdGlvbkluZm9EaXJlY3RpdmUgZXh0ZW5kcyBPcmllbnRhdGlvbkluZm8gaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIG9yaWVudGF0aW9uOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfcmVzcG9uc2l2ZVN0YXRlOiBSZXNwb25zaXZlU3RhdGUsXHJcbiAgICAgICAgcHJvdGVjdGVkIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICAgICAgcHJvdGVjdGVkIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgICAgICBwbGF0Zm9ybVNlcnZpY2U6IFBsYXRmb3JtU2VydmljZVxyXG4gICAgKSB7IHN1cGVyKF9yZXNwb25zaXZlU3RhdGUsIHBsYXRmb3JtU2VydmljZSk7IH1cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuY29ubmVjdCgpO1xyXG4gICAgfVxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5kaXNjb25uZWN0KCk7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgX3VwZGF0ZURhdGEodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMub3JpZW50YXRpb24uZW1pdCh2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH1cclxufVxyXG4iXX0=