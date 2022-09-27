/**
 *  @name bootstrap.directives
 *  @description bootstrap directives
 *  @license MIT
 */
import { Directive, Input } from '@angular/core';
import { RESPONSIVE_BASE } from '../../@core/providers/responsive-base/responsive-base';
import * as i0 from "@angular/core";
import * as i1 from "../../@core/providers/responsive-state/responsive-state";
import * as i2 from "../../@core/providers/platform-service/platform.service";
export class XlDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._state = 'xl';
        this._showWhenTrue = true;
        this.setGrid(this._state, 'bootstrap');
    }
}
XlDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: XlDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: i1.ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: i2.PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
XlDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: XlDirective, selector: "[xl]", usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: XlDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[xl]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: i1.ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: i2.PlatformService }]; } });
export class LgDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._state = 'lg';
        this._showWhenTrue = true;
        this.setGrid(this._state, 'bootstrap');
    }
}
LgDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: LgDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: i1.ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: i2.PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
LgDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: LgDirective, selector: "[lg]", usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: LgDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[lg]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: i1.ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: i2.PlatformService }]; } });
export class MdDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._state = 'md';
        this._showWhenTrue = true;
        this.setGrid(this._state, 'bootstrap');
    }
}
MdDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: MdDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: i1.ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: i2.PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
MdDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: MdDirective, selector: "[md]", usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: MdDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[md]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: i1.ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: i2.PlatformService }]; } });
export class SmDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._state = 'sm';
        this._showWhenTrue = true;
        this.setGrid(this._state, 'bootstrap');
    }
}
SmDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: SmDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: i1.ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: i2.PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
SmDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: SmDirective, selector: "[sm]", usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: SmDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[sm]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: i1.ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: i2.PlatformService }]; } });
export class XsDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._state = 'xs';
        this._showWhenTrue = true;
        this.setGrid(this._state, 'bootstrap');
    }
}
XsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: XsDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: i1.ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: i2.PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
XsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: XsDirective, selector: "[xs]", usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: XsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[xs]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: i1.ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: i2.PlatformService }]; } });
export class ShowItBootstrapDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._showWhenTrue = true;
    }
    set showItBootstrap(grid_state) {
        this.setGrid(grid_state, 'bootstrap');
    }
}
ShowItBootstrapDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ShowItBootstrapDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: i1.ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: i2.PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
ShowItBootstrapDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: ShowItBootstrapDirective, selector: "[showItBootstrap]", inputs: { showItBootstrap: "showItBootstrap" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ShowItBootstrapDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[showItBootstrap]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: i1.ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: i2.PlatformService }]; }, propDecorators: { showItBootstrap: [{
                type: Input
            }] } });
export class HideItBootstrapDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._showWhenTrue = false;
    }
    set hideItBootstrap(grid_state) {
        this.setGrid(grid_state, 'bootstrap');
    }
}
HideItBootstrapDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: HideItBootstrapDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: i1.ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: i2.PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
HideItBootstrapDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: HideItBootstrapDirective, selector: "[hideItBootstrap]", inputs: { hideItBootstrap: "hideItBootstrap" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: HideItBootstrapDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hideItBootstrap]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: i1.ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: i2.PlatformService }]; }, propDecorators: { hideItBootstrap: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vdHN0cmFwLWRpcmVjdGl2ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGRpcmVjdGl2ZXMvYm9vdHN0cmFwL2Jvb3RzdHJhcC1kaXJlY3RpdmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFDSCxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBb0QsTUFBTSxlQUFlLENBQUM7QUFJbkcsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVEQUF1RCxDQUFDOzs7O0FBS3hGLE1BQU0sT0FBTyxXQUFZLFNBQVEsZUFBb0I7SUFLakQsWUFBYSxXQUE2QixFQUM3QixhQUErQixFQUMvQixnQkFBaUMsRUFDakMsRUFBcUIsRUFDckIsZUFBZ0M7UUFHekMsS0FBSyxDQUFHLFdBQVcsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsRUFBRSxFQUFFLGVBQWUsQ0FBRSxDQUFDO1FBVnRFLFdBQU0sR0FBRyxJQUFJLENBQUM7UUFDZCxrQkFBYSxHQUFHLElBQUksQ0FBQztRQVUzQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7d0dBZFEsV0FBVzs0RkFBWCxXQUFXOzJGQUFYLFdBQVc7a0JBSHZCLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLE1BQU07aUJBQ25COztBQXNCRCxNQUFNLE9BQU8sV0FBWSxTQUFRLGVBQW9CO0lBSWpELFlBQWEsV0FBNkIsRUFDN0IsYUFBK0IsRUFDL0IsZ0JBQWlDLEVBQ2pDLEVBQXFCLEVBQ3JCLGVBQWdDO1FBRXpDLEtBQUssQ0FBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLEVBQUUsRUFBRSxlQUFlLENBQUUsQ0FBQztRQVJyRSxXQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2Qsa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFRM0IsSUFBSSxDQUFDLE9BQU8sQ0FBRSxJQUFJ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LGdCQUFnQixFQUFFLEVBQUUsRUFBRSxlQUFlLENBQUUsQ0FBQztRQVhyRSxrQkFBYSxHQUFHLEtBQUssQ0FBQztJQVloQyxDQUFDO0lBVkQsSUFBYSxlQUFlLENBQUUsVUFBNkI7UUFDdkQsSUFBSSxDQUFDLE9BQU8sQ0FBRSxVQUFVLEVBQUUsV0FBVyxDQUFFLENBQUM7SUFDNUMsQ0FBQzs7cUhBTlEsd0JBQXdCO3lHQUF4Qix3QkFBd0I7MkZBQXhCLHdCQUF3QjtrQkFKcEMsU0FBUzttQkFDVjtvQkFDSSxRQUFRLEVBQUUsbUJBQW1CO2lCQUNoQzs2TkFLZ0IsZUFBZTtzQkFBM0IsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiAgQG5hbWUgYm9vdHN0cmFwLmRpcmVjdGl2ZXNcclxuICogIEBkZXNjcmlwdGlvbiBib290c3RyYXAgZGlyZWN0aXZlc1xyXG4gKiAgQGxpY2Vuc2UgTUlUXHJcbiAqL1xyXG5pbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUExBVEZPUk1fSUQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgUmVzcG9uc2l2ZVN0YXRlIH0gZnJvbSAnLi4vLi4vQGNvcmUvcHJvdmlkZXJzL3Jlc3BvbnNpdmUtc3RhdGUvcmVzcG9uc2l2ZS1zdGF0ZSc7XHJcbmltcG9ydCB7IFJFU1BPTlNJVkVfQkFTRSB9IGZyb20gJy4uLy4uL0Bjb3JlL3Byb3ZpZGVycy9yZXNwb25zaXZlLWJhc2UvcmVzcG9uc2l2ZS1iYXNlJztcclxuaW1wb3J0IHsgUGxhdGZvcm1TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vQGNvcmUvcHJvdmlkZXJzL3BsYXRmb3JtLXNlcnZpY2UvcGxhdGZvcm0uc2VydmljZSc7XHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbeGxdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgWGxEaXJlY3RpdmUgZXh0ZW5kcyBSRVNQT05TSVZFX0JBU0U8YW55PiB7XHJcblxyXG4gICAgcHJvdGVjdGVkIF9zdGF0ZSA9ICd4bCc7XHJcbiAgICBwcm90ZWN0ZWQgX3Nob3dXaGVuVHJ1ZSA9IHRydWU7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKCB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PixcclxuICAgICAgICAgICAgICAgICB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICAgICAgICAgICAgIF9yZXNwb25zaXZlU3RhdGU6IFJlc3BvbnNpdmVTdGF0ZSxcclxuICAgICAgICAgICAgICAgICBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICAgICAgICAgICAgICAgcGxhdGZvcm1TZXJ2aWNlOiBQbGF0Zm9ybVNlcnZpY2VcclxuICAgICkge1xyXG5cclxuICAgICAgICBzdXBlciAoIHRlbXBsYXRlUmVmLCB2aWV3Q29udGFpbmVyLCBfcmVzcG9uc2l2ZVN0YXRlLCBjZCwgcGxhdGZvcm1TZXJ2aWNlICk7XHJcbiAgICAgICAgdGhpcy5zZXRHcmlkKHRoaXMuX3N0YXRlLCAnYm9vdHN0cmFwJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoXHJcbntcclxuICAgIHNlbGVjdG9yOiAnW2xnXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIExnRGlyZWN0aXZlIGV4dGVuZHMgUkVTUE9OU0lWRV9CQVNFPGFueT4ge1xyXG5cclxuICAgIHByb3RlY3RlZCBfc3RhdGUgPSAnbGcnO1xyXG4gICAgcHJvdGVjdGVkIF9zaG93V2hlblRydWUgPSB0cnVlO1xyXG4gICAgY29uc3RydWN0b3IoIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LFxyXG4gICAgICAgICAgICAgICAgIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICAgICAgICAgICAgICAgX3Jlc3BvbnNpdmVTdGF0ZTogUmVzcG9uc2l2ZVN0YXRlLFxyXG4gICAgICAgICAgICAgICAgIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgICAgICAgICAgICAgICBwbGF0Zm9ybVNlcnZpY2U6IFBsYXRmb3JtU2VydmljZVxyXG4gICAgKSB7XHJcbiAgICAgICAgc3VwZXIoIHRlbXBsYXRlUmVmLCB2aWV3Q29udGFpbmVyLCBfcmVzcG9uc2l2ZVN0YXRlLCBjZCwgcGxhdGZvcm1TZXJ2aWNlICk7XHJcbiAgICAgICAgdGhpcy5zZXRHcmlkKCB0aGlzLl9zdGF0ZSwgJ2Jvb3RzdHJhcCcgKTtcclxuICAgIH1cclxufVxyXG5ARGlyZWN0aXZlKFxyXG57XHJcbiAgICBzZWxlY3RvcjogJ1ttZF0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNZERpcmVjdGl2ZSBleHRlbmRzIFJFU1BPTlNJVkVfQkFTRTxhbnk+IHtcclxuICAgIHByb3RlY3RlZCBfc3RhdGUgPSAnbWQnO1xyXG4gICAgcHJvdGVjdGVkIF9zaG93V2hlblRydWUgPSB0cnVlO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvciggdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sXHJcbiAgICAgICAgICAgICAgICAgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZixcclxuICAgICAgICAgICAgICAgICBfcmVzcG9uc2l2ZVN0YXRlOiBSZXNwb25zaXZlU3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgICAgICAgICAgICAgIHBsYXRmb3JtU2VydmljZTogUGxhdGZvcm1TZXJ2aWNlXHJcbiAgICApIHtcclxuICAgICAgICBzdXBlciggdGVtcGxhdGVSZWYsIHZpZXdDb250YWluZXIsIF9yZXNwb25zaXZlU3RhdGUsIGNkLCBwbGF0Zm9ybVNlcnZpY2UgKTtcclxuICAgICAgICB0aGlzLnNldEdyaWQoIHRoaXMuX3N0YXRlLCAnYm9vdHN0cmFwJyApO1xyXG4gICAgfVxyXG59XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW3NtXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFNtRGlyZWN0aXZlIGV4dGVuZHMgUkVTUE9OU0lWRV9CQVNFPGFueT4ge1xyXG5cclxuICAgIHByb3RlY3RlZCBfc3RhdGUgPSAnc20nO1xyXG4gICAgcHJvdGVjdGVkIF9zaG93V2hlblRydWUgPSB0cnVlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PixcclxuICAgICAgICAgICAgICAgICB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICAgICAgICAgICAgIF9yZXNwb25zaXZlU3RhdGU6IFJlc3BvbnNpdmVTdGF0ZSxcclxuICAgICAgICAgICAgICAgICBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICAgICAgICAgICAgICAgcGxhdGZvcm1TZXJ2aWNlOiBQbGF0Zm9ybVNlcnZpY2VcclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKCB0ZW1wbGF0ZVJlZiwgdmlld0NvbnRhaW5lciwgX3Jlc3BvbnNpdmVTdGF0ZSwgY2QsIHBsYXRmb3JtU2VydmljZSApO1xyXG4gICAgICAgIHRoaXMuc2V0R3JpZCggdGhpcy5fc3RhdGUsICdib290c3RyYXAnICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbeHNdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgWHNEaXJlY3RpdmUgZXh0ZW5kcyBSRVNQT05TSVZFX0JBU0U8YW55PiB7XHJcblxyXG4gICAgcHJvdGVjdGVkIF9zdGF0ZSA9ICd4cyc7XHJcbiAgICBwcm90ZWN0ZWQgX3Nob3dXaGVuVHJ1ZSA9IHRydWU7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKCB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PixcclxuICAgICAgICAgICAgICAgICB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICAgICAgICAgICAgIF9yZXNwb25zaXZlU3RhdGU6IFJlc3BvbnNpdmVTdGF0ZSxcclxuICAgICAgICAgICAgICAgICBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICAgICAgICAgICAgICAgcGxhdGZvcm1TZXJ2aWNlOiBQbGF0Zm9ybVNlcnZpY2VcclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKCB0ZW1wbGF0ZVJlZiwgdmlld0NvbnRhaW5lciwgX3Jlc3BvbnNpdmVTdGF0ZSwgY2QsIHBsYXRmb3JtU2VydmljZSApO1xyXG4gICAgICAgIHRoaXMuc2V0R3JpZCh0aGlzLl9zdGF0ZSwgJ2Jvb3RzdHJhcCcpO1xyXG4gICAgfVxyXG59XHJcbkBEaXJlY3RpdmUoXHJcbntcclxuICAgIHNlbGVjdG9yOiAnW3Nob3dJdEJvb3RzdHJhcF0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaG93SXRCb290c3RyYXBEaXJlY3RpdmUgZXh0ZW5kcyBSRVNQT05TSVZFX0JBU0U8YW55PiB7XHJcbiAgICBwcm90ZWN0ZWQgX3Nob3dXaGVuVHJ1ZSA9IHRydWU7XHJcbiAgICBASW5wdXQoKSBzZXQgc2hvd0l0Qm9vdHN0cmFwKCBncmlkX3N0YXRlOiBzdHJpbmdbXSB8IHN0cmluZyApIHtcclxuICAgICAgICB0aGlzLnNldEdyaWQoIGdyaWRfc3RhdGUsICdib290c3RyYXAnICk7XHJcbiAgICB9XHJcbiAgICBjb25zdHJ1Y3RvciggdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sXHJcbiAgICAgICAgICAgICAgICAgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZixcclxuICAgICAgICAgICAgICAgICBfcmVzcG9uc2l2ZVN0YXRlOiBSZXNwb25zaXZlU3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgICAgICAgICAgICAgIHBsYXRmb3JtU2VydmljZTogUGxhdGZvcm1TZXJ2aWNlXHJcbiAgICApIHtcclxuICAgICAgICBzdXBlciggdGVtcGxhdGVSZWYsIHZpZXdDb250YWluZXIsIF9yZXNwb25zaXZlU3RhdGUsIGNkLCBwbGF0Zm9ybVNlcnZpY2UgKTtcclxuICAgIH1cclxufVxyXG5ARGlyZWN0aXZlKFxyXG57XHJcbiAgICBzZWxlY3RvcjogJ1toaWRlSXRCb290c3RyYXBdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSGlkZUl0Qm9vdHN0cmFwRGlyZWN0aXZlIGV4dGVuZHMgUkVTUE9OU0lWRV9CQVNFPGFueT4ge1xyXG5cclxuICAgIHByb3RlY3RlZCBfc2hvd1doZW5UcnVlID0gZmFsc2U7XHJcblxyXG4gICAgQElucHV0KCkgc2V0IGhpZGVJdEJvb3RzdHJhcCggZ3JpZF9zdGF0ZTogc3RyaW5nW10gfCBzdHJpbmcgKSB7XHJcbiAgICAgICAgdGhpcy5zZXRHcmlkKCBncmlkX3N0YXRlLCAnYm9vdHN0cmFwJyApO1xyXG4gICAgfVxyXG4gICAgY29uc3RydWN0b3IoIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LFxyXG4gICAgICAgICAgICAgICAgIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICAgICAgICAgICAgICAgX3Jlc3BvbnNpdmVTdGF0ZTogUmVzcG9uc2l2ZVN0YXRlLFxyXG4gICAgICAgICAgICAgICAgIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgICAgICAgICAgICAgICBwbGF0Zm9ybVNlcnZpY2U6IFBsYXRmb3JtU2VydmljZVxyXG4gICAgKSB7XHJcbiAgICAgICAgc3VwZXIoIHRlbXBsYXRlUmVmLCB2aWV3Q29udGFpbmVyLCBfcmVzcG9uc2l2ZVN0YXRlLCBjZCwgcGxhdGZvcm1TZXJ2aWNlICk7XHJcbiAgICB9XHJcbn1cclxuIl19