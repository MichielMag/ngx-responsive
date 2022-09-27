/**
 * @name pixelratio.directives
 * @description pixelratio directives in ngx-responsive
 *
 * @license MIT
 */
import { Directive, Input, Output, EventEmitter } from '@angular/core';
import { RESPONSIVE_BASE } from '../../@core/providers/responsive-base/responsive-base';
import * as i0 from "@angular/core";
import * as i1 from "../../@core/providers/responsive-state/responsive-state";
import * as i2 from "../../@core/providers/platform-service/platform.service";
/*======== 1x =========*/
export class Is1xPixelDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._state = '1x';
        this._showWhenTrue = true;
    }
    set is1xPixel(grid_state) {
        this.setGrid(this._state, 'pixelratio');
    }
}
Is1xPixelDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: Is1xPixelDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: i1.ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: i2.PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
Is1xPixelDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: Is1xPixelDirective, selector: "[is1xPixel]", inputs: { is1xPixel: "is1xPixel" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: Is1xPixelDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[is1xPixel]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: i1.ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: i2.PlatformService }]; }, propDecorators: { is1xPixel: [{
                type: Input
            }] } });
/*======== RETINA =========*/
export class IsRetinaDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._state = 'retina';
        this._showWhenTrue = true;
    }
    set isRetina(grid_state) {
        this.setGrid(this._state, 'pixelratio');
    }
}
IsRetinaDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsRetinaDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: i1.ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: i2.PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
IsRetinaDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: IsRetinaDirective, selector: "[isRetina]", inputs: { isRetina: "isRetina" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsRetinaDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[isRetina]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: i1.ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: i2.PlatformService }]; }, propDecorators: { isRetina: [{
                type: Input
            }] } });
/*======== 4K =========*/
export class Is4kDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._state = '4k';
        this._showWhenTrue = true;
    }
    set isRetina(grid_state) {
        this.setGrid(this._state, 'pixelratio');
    }
}
Is4kDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: Is4kDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: i1.ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: i2.PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
Is4kDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: Is4kDirective, selector: "[is4k]", inputs: { isRetina: "isRetina" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: Is4kDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[is4k]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: i1.ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: i2.PlatformService }]; }, propDecorators: { isRetina: [{
                type: Input
            }] } });
/*======== DeviceInfo =========*/
export class PixelRatioInfoDirective {
    constructor(_responsiveState, viewContainer, cd, platformService) {
        this._responsiveState = _responsiveState;
        this.viewContainer = viewContainer;
        this.cd = cd;
        this._isEnabledForPlatform = null;
        this.pixelratio = new EventEmitter();
        this._isEnabledForPlatform = platformService.isEnabledForPlatform();
    }
    set pixelratioInfo(grid_state) {
        this.updateData(this.currentstate);
    }
    ngOnInit() {
        if (this._isEnabledForPlatform) {
            this._subscription = this._responsiveState.pixel$.subscribe(this.updateData.bind(this));
        }
    }
    ngOnDestroy() {
        if (this._isEnabledForPlatform) {
            this._subscription.unsubscribe();
        }
    }
    updateData(value) {
        const update = this._ifValueChanged(this.noRepeat, value);
        if (update) {
            this.pixelratio.emit(value);
            this.cd.markForCheck();
        }
    }
    _ifValueChanged(oldValue, newValue) {
        if (oldValue === newValue) {
            return false;
        }
        else {
            this.noRepeat = newValue;
            return true;
        }
    }
}
PixelRatioInfoDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: PixelRatioInfoDirective, deps: [{ token: i1.ResponsiveState }, { token: i0.ViewContainerRef }, { token: i0.ChangeDetectorRef }, { token: i2.PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
PixelRatioInfoDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: PixelRatioInfoDirective, selector: "pixel-ratio-info", inputs: { pixelratioInfo: "pixelratioInfo" }, outputs: { pixelratio: "pixelratio" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: PixelRatioInfoDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'pixel-ratio-info' }]
        }], ctorParameters: function () { return [{ type: i1.ResponsiveState }, { type: i0.ViewContainerRef }, { type: i0.ChangeDetectorRef }, { type: i2.PlatformService }]; }, propDecorators: { pixelratioInfo: [{
                type: Input
            }], pixelratio: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGl4ZWxyYXRpby1kaXJlY3RpdmVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL0BkaXJlY3RpdmVzL3BpeGVscmF0aW8vcGl4ZWxyYXRpby1kaXJlY3RpdmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztHQUtHO0FBQ0gsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBdUUsTUFBTSxlQUFlLENBQUM7QUFNNUksT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVEQUF1RCxDQUFDOzs7O0FBR3hGLHlCQUF5QjtBQUl6QixNQUFNLE9BQU8sa0JBQW1CLFNBQVEsZUFBb0I7SUFReEQsWUFBYyxXQUE2QixFQUM3QixhQUErQixFQUMvQixnQkFBaUMsRUFDakMsRUFBcUIsRUFDckIsZUFBZ0M7UUFFekMsS0FBSyxDQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsRUFBRSxFQUFFLGVBQWUsQ0FBRSxDQUFDO1FBWnRFLFdBQU0sR0FBRyxJQUFJLENBQUM7UUFDZCxrQkFBYSxHQUFHLElBQUksQ0FBQztJQVkvQixDQUFDO0lBVkQsSUFBYSxTQUFTLENBQUUsVUFBa0I7UUFDdEMsSUFBSSxDQUFDLE9BQU8sQ0FBRSxJQUFJLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBRSxDQUFDO0lBQzlDLENBQUM7OytHQVBRLGtCQUFrQjttR0FBbEIsa0JBQWtCOzJGQUFsQixrQkFBa0I7a0JBSDlCLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLGFBQWE7aUJBQzFCOzZOQU1nQixTQUFTO3NCQUFyQixLQUFLOztBQWFWLDZCQUE2QjtBQU03QixNQUFNLE9BQU8saUJBQWtCLFNBQVEsZUFBb0I7SUFRdkQsWUFBYSxXQUE2QixFQUM3QixhQUErQixFQUMvQixnQkFBaUMsRUFDakMsRUFBcUIsRUFDckIsZUFBZ0M7UUFFekMsS0FBSyxDQUFFLFdBQVcsRUFBRSxhQUFhLEVB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SSxDQUFDO1NBQ2Y7SUFDTCxDQUFDOztvSEFqRFEsdUJBQXVCO3dHQUF2Qix1QkFBdUI7MkZBQXZCLHVCQUF1QjtrQkFEbkMsU0FBUzttQkFBQyxFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBRTttTUFRMUIsY0FBYztzQkFBMUIsS0FBSztnQkFJSSxVQUFVO3NCQUFuQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBuYW1lIHBpeGVscmF0aW8uZGlyZWN0aXZlc1xyXG4gKiBAZGVzY3JpcHRpb24gcGl4ZWxyYXRpbyBkaXJlY3RpdmVzIGluIG5neC1yZXNwb25zaXZlXHJcbiAqXHJcbiAqIEBsaWNlbnNlIE1JVFxyXG4gKi9cclxuaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmLCBPbkluaXQsIE9uRGVzdHJveSwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUExBVEZPUk1fSUQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgUmVzcG9uc2l2ZVN0YXRlIH0gZnJvbSAnLi4vLi4vQGNvcmUvcHJvdmlkZXJzL3Jlc3BvbnNpdmUtc3RhdGUvcmVzcG9uc2l2ZS1zdGF0ZSc7XHJcbmltcG9ydCB7IFJFU1BPTlNJVkVfQkFTRSB9IGZyb20gJy4uLy4uL0Bjb3JlL3Byb3ZpZGVycy9yZXNwb25zaXZlLWJhc2UvcmVzcG9uc2l2ZS1iYXNlJztcclxuaW1wb3J0IHsgUGxhdGZvcm1TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vQGNvcmUvcHJvdmlkZXJzL3BsYXRmb3JtLXNlcnZpY2UvcGxhdGZvcm0uc2VydmljZSc7XHJcblxyXG4vKj09PT09PT09IDF4ID09PT09PT09PSovXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbaXMxeFBpeGVsXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIElzMXhQaXhlbERpcmVjdGl2ZSBleHRlbmRzIFJFU1BPTlNJVkVfQkFTRTxhbnk+IHtcclxuXHJcbiAgICBwcm90ZWN0ZWQgX3N0YXRlID0gJzF4JztcclxuICAgIHByb3RlY3RlZCBfc2hvd1doZW5UcnVlID0gdHJ1ZTtcclxuXHJcbiAgICBASW5wdXQoKSBzZXQgaXMxeFBpeGVsKCBncmlkX3N0YXRlOiBzdHJpbmcgKSB7XHJcbiAgICAgICAgdGhpcy5zZXRHcmlkKCB0aGlzLl9zdGF0ZSwgJ3BpeGVscmF0aW8nICk7XHJcbiAgICB9XHJcbiAgICBjb25zdHJ1Y3RvciAoIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LFxyXG4gICAgICAgICAgICAgICAgICB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICAgICAgICAgICAgICBfcmVzcG9uc2l2ZVN0YXRlOiBSZXNwb25zaXZlU3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgICAgICAgICAgICAgICAgcGxhdGZvcm1TZXJ2aWNlOiBQbGF0Zm9ybVNlcnZpY2VcclxuICAgICAgICAgKSB7XHJcbiAgICAgICAgIHN1cGVyKCB0ZW1wbGF0ZVJlZiwgdmlld0NvbnRhaW5lciwgX3Jlc3BvbnNpdmVTdGF0ZSwgY2QsIHBsYXRmb3JtU2VydmljZSApO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKj09PT09PT09IFJFVElOQSA9PT09PT09PT0qL1xyXG5ARGlyZWN0aXZlKFxyXG57XHJcbiAgICBzZWxlY3RvcjogJ1tpc1JldGluYV0nXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSXNSZXRpbmFEaXJlY3RpdmUgZXh0ZW5kcyBSRVNQT05TSVZFX0JBU0U8YW55PiB7XHJcblxyXG4gICAgcHJvdGVjdGVkIF9zdGF0ZSA9ICdyZXRpbmEnO1xyXG4gICAgcHJvdGVjdGVkIF9zaG93V2hlblRydWUgPSB0cnVlO1xyXG5cclxuICAgIEBJbnB1dCgpIHNldCBpc1JldGluYSggZ3JpZF9zdGF0ZTogc3RyaW5nICkge1xyXG4gICAgICAgIHRoaXMuc2V0R3JpZCggdGhpcy5fc3RhdGUsICdwaXhlbHJhdGlvJyApO1xyXG4gICAgfVxyXG4gICAgY29uc3RydWN0b3IoIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LFxyXG4gICAgICAgICAgICAgICAgIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICAgICAgICAgICAgICAgX3Jlc3BvbnNpdmVTdGF0ZTogUmVzcG9uc2l2ZVN0YXRlLFxyXG4gICAgICAgICAgICAgICAgIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgICAgICAgICAgICAgICBwbGF0Zm9ybVNlcnZpY2U6IFBsYXRmb3JtU2VydmljZVxyXG4gICAgICAgICkge1xyXG4gICAgICAgIHN1cGVyKCB0ZW1wbGF0ZVJlZiwgdmlld0NvbnRhaW5lciwgX3Jlc3BvbnNpdmVTdGF0ZSwgY2QsIHBsYXRmb3JtU2VydmljZSApO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKj09PT09PT09IDRLID09PT09PT09PSovXHJcbkBEaXJlY3RpdmUoXHJcbntcclxuICAgIHNlbGVjdG9yOiAnW2lzNGtdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSXM0a0RpcmVjdGl2ZSBleHRlbmRzIFJFU1BPTlNJVkVfQkFTRTxhbnk+IHtcclxuXHJcbiAgICBwcm90ZWN0ZWQgX3N0YXRlID0gJzRrJztcclxuICAgIHByb3RlY3RlZCBfc2hvd1doZW5UcnVlID0gdHJ1ZTtcclxuXHJcbiAgICBASW5wdXQoKSBzZXQgaXNSZXRpbmEoIGdyaWRfc3RhdGU6IHN0cmluZyApIHtcclxuICAgICAgICB0aGlzLnNldEdyaWQoIHRoaXMuX3N0YXRlLCAncGl4ZWxyYXRpbycgKTtcclxuICAgIH1cclxuICAgIGNvbnN0cnVjdG9yKCB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PixcclxuICAgICAgICAgICAgICAgICB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICAgICAgICAgICAgX3Jlc3BvbnNpdmVTdGF0ZTogUmVzcG9uc2l2ZVN0YXRlLFxyXG4gICAgICAgICAgICAgICAgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgICAgICAgICAgICAgcGxhdGZvcm1TZXJ2aWNlOiBQbGF0Zm9ybVNlcnZpY2VcclxuICAgICAgICkge1xyXG4gICAgICAgc3VwZXIoIHRlbXBsYXRlUmVmLCB2aWV3Q29udGFpbmVyLCBfcmVzcG9uc2l2ZVN0YXRlLCBjZCwgcGxhdGZvcm1TZXJ2aWNlICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qPT09PT09PT0gRGV2aWNlSW5mbyA9PT09PT09PT0qL1xyXG5cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAncGl4ZWwtcmF0aW8taW5mbycgfSlcclxuZXhwb3J0IGNsYXNzIFBpeGVsUmF0aW9JbmZvRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICAgIHB1YmxpYyBjdXJyZW50c3RhdGU6IHN0cmluZztcclxuICAgIHByaXZhdGUgX3N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gICAgcHJpdmF0ZSBub1JlcGVhdDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfaXNFbmFibGVkRm9yUGxhdGZvcm06IGJvb2xlYW4gPSBudWxsO1xyXG5cclxuICAgIEBJbnB1dCgpIHNldCBwaXhlbHJhdGlvSW5mbyggZ3JpZF9zdGF0ZTogc3RyaW5nW10gfCBzdHJpbmcgKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVEYXRhKCB0aGlzLmN1cnJlbnRzdGF0ZSApO1xyXG4gICAgfVxyXG5cclxuICAgIEBPdXRwdXQoKSBwaXhlbHJhdGlvOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIF9yZXNwb25zaXZlU3RhdGU6IFJlc3BvbnNpdmVTdGF0ZSxcclxuICAgICAgICBwcml2YXRlIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICAgICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICAgICAgcGxhdGZvcm1TZXJ2aWNlOiBQbGF0Zm9ybVNlcnZpY2VcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuX2lzRW5hYmxlZEZvclBsYXRmb3JtID0gcGxhdGZvcm1TZXJ2aWNlLmlzRW5hYmxlZEZvclBsYXRmb3JtKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzRW5hYmxlZEZvclBsYXRmb3JtKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IHRoaXMuX3Jlc3BvbnNpdmVTdGF0ZS5waXhlbCQuc3Vic2NyaWJlKHRoaXMudXBkYXRlRGF0YS5iaW5kKCB0aGlzICkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICBpZiAodGhpcy5faXNFbmFibGVkRm9yUGxhdGZvcm0pIHtcclxuICAgICAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZURhdGEoIHZhbHVlOiBhbnkgKSB7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlID0gdGhpcy5faWZWYWx1ZUNoYW5nZWQoIHRoaXMubm9SZXBlYXQsIHZhbHVlICk7XHJcbiAgICAgICAgaWYgKHVwZGF0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnBpeGVscmF0aW8uZW1pdCggdmFsdWUgKTtcclxuICAgICAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX2lmVmFsdWVDaGFuZ2VkKCBvbGRWYWx1ZTogYW55LCBuZXdWYWx1ZTogYW55ICk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICggb2xkVmFsdWUgPT09IG5ld1ZhbHVlICkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5ub1JlcGVhdCA9IG5ld1ZhbHVlO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19