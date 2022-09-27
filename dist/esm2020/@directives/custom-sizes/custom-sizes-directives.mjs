/**
 * @name custom-sizes.directives
 * @description Custom sizes directives in ngx-responsive
 *
 * @license MIT
 */
import { Directive, Input } from '@angular/core';
import { RESPONSIVE_BASE } from '../../@core/providers/responsive-base/responsive-base';
import * as i0 from "@angular/core";
import * as i1 from "../../@core/providers/responsive-state/responsive-state";
import * as i2 from "../../@core/providers/platform-service/platform.service";
export class ShowItSizesDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._showWhenTrue = true;
    }
    set showItSizes(_grid_state) {
        this.setGrid(_grid_state, 'sizes');
    }
}
ShowItSizesDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ShowItSizesDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: i1.ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: i2.PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
ShowItSizesDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: ShowItSizesDirective, selector: "[showItSizes]", inputs: { showItSizes: "showItSizes" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ShowItSizesDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[showItSizes]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: i1.ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: i2.PlatformService }]; }, propDecorators: { showItSizes: [{
                type: Input
            }] } });
export class HideItSizesDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._showWhenTrue = false;
    }
    set hideItSizes(_grid_state) {
        this.setGrid(_grid_state, 'sizes');
    }
}
HideItSizesDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: HideItSizesDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: i1.ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: i2.PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
HideItSizesDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: HideItSizesDirective, selector: "[hideItSizes]", inputs: { hideItSizes: "hideItSizes" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: HideItSizesDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hideItSizes]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: i1.ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: i2.PlatformService }]; }, propDecorators: { hideItSizes: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLXNpemVzLWRpcmVjdGl2ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGRpcmVjdGl2ZXMvY3VzdG9tLXNpemVzL2N1c3RvbS1zaXplcy1kaXJlY3RpdmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztHQUtHO0FBQ0gsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQW9ELE1BQU0sZUFBZSxDQUFDO0FBRW5HLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1REFBdUQsQ0FBQzs7OztBQU14RixNQUFNLE9BQU8sb0JBQXFCLFNBQVEsZUFBb0I7SUFJMUQsWUFBYSxXQUE2QixFQUM3QixhQUErQixFQUMvQixnQkFBaUMsRUFDakMsRUFBcUIsRUFDckIsZUFBZ0M7UUFFekMsS0FBSyxDQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsRUFBRSxFQUFFLGVBQWUsQ0FBRSxDQUFDO1FBUnJFLGtCQUFhLEdBQUcsSUFBSSxDQUFDO0lBUy9CLENBQUM7SUFDQSxJQUFhLFdBQVcsQ0FBRSxXQUFnQjtRQUN2QyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN2QyxDQUFDOztpSEFkUSxvQkFBb0I7cUdBQXBCLG9CQUFvQjsyRkFBcEIsb0JBQW9CO2tCQUpoQyxTQUFTO21CQUNWO29CQUNJLFFBQVEsRUFBRSxlQUFlO2lCQUM1Qjs2TkFhaUIsV0FBVztzQkFBdkIsS0FBSzs7QUFTWCxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsZUFBb0I7SUFJMUQsWUFBYSxXQUE2QixFQUM3QixhQUErQixFQUMvQixnQkFBaUMsRUFDakMsRUFBcUIsRUFDckIsZUFBZ0M7UUFFekMsS0FBSyxDQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsRUFBRSxFQUFFLGVBQWUsQ0FBRSxDQUFDO1FBUnJFLGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBU2hDLENBQUM7SUFFRCxJQUFhLFdBQVcsQ0FBRSxXQUFnQjtRQUN0QyxJQUFJLENBQUMsT0FBTyxDQUFFLFdBQVcsRUFBRSxPQUFPLENBQUUsQ0FBQztJQUN6QyxDQUFDOztpSEFmUSxvQkFBb0I7cUdBQXBCLG9CQUFvQjsyRkFBcEIsb0JBQW9CO2tCQUpoQyxTQUFTO21CQUNWO29CQUNJLFFBQVEsRUFBRSxlQUFlO2lCQUM1Qjs2TkFjZ0IsV0FBVztzQkFBdkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbmFtZSBjdXN0b20tc2l6ZXMuZGlyZWN0aXZlc1xyXG4gKiBAZGVzY3JpcHRpb24gQ3VzdG9tIHNpemVzIGRpcmVjdGl2ZXMgaW4gbmd4LXJlc3BvbnNpdmVcclxuICpcclxuICogQGxpY2Vuc2UgTUlUXHJcbiAqL1xyXG5pbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUmVzcG9uc2l2ZVN0YXRlIH0gZnJvbSAnLi4vLi4vQGNvcmUvcHJvdmlkZXJzL3Jlc3BvbnNpdmUtc3RhdGUvcmVzcG9uc2l2ZS1zdGF0ZSc7XHJcbmltcG9ydCB7IFJFU1BPTlNJVkVfQkFTRSB9IGZyb20gJy4uLy4uL0Bjb3JlL3Byb3ZpZGVycy9yZXNwb25zaXZlLWJhc2UvcmVzcG9uc2l2ZS1iYXNlJztcclxuaW1wb3J0IHsgUGxhdGZvcm1TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vQGNvcmUvcHJvdmlkZXJzL3BsYXRmb3JtLXNlcnZpY2UvcGxhdGZvcm0uc2VydmljZSc7XHJcbkBEaXJlY3RpdmUoXHJcbntcclxuICAgIHNlbGVjdG9yOiAnW3Nob3dJdFNpemVzXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFNob3dJdFNpemVzRGlyZWN0aXZlIGV4dGVuZHMgUkVTUE9OU0lWRV9CQVNFPGFueT4ge1xyXG5cclxuICAgIHByb3RlY3RlZCBfc2hvd1doZW5UcnVlID0gdHJ1ZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sXHJcbiAgICAgICAgICAgICAgICAgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZixcclxuICAgICAgICAgICAgICAgICBfcmVzcG9uc2l2ZVN0YXRlOiBSZXNwb25zaXZlU3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgICAgICAgICAgICAgIHBsYXRmb3JtU2VydmljZTogUGxhdGZvcm1TZXJ2aWNlXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgc3VwZXIoIHRlbXBsYXRlUmVmLCB2aWV3Q29udGFpbmVyLCBfcmVzcG9uc2l2ZVN0YXRlLCBjZCwgcGxhdGZvcm1TZXJ2aWNlICk7XHJcbiAgICB9XHJcbiAgICAgQElucHV0KCkgc2V0IHNob3dJdFNpemVzKCBfZ3JpZF9zdGF0ZTogYW55ICkge1xyXG4gICAgICAgIHRoaXMuc2V0R3JpZChfZ3JpZF9zdGF0ZSwgJ3NpemVzJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoXHJcbntcclxuICAgIHNlbGVjdG9yOiAnW2hpZGVJdFNpemVzXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIEhpZGVJdFNpemVzRGlyZWN0aXZlIGV4dGVuZHMgUkVTUE9OU0lWRV9CQVNFPGFueT4ge1xyXG5cclxuICAgIHByb3RlY3RlZCBfc2hvd1doZW5UcnVlID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LFxyXG4gICAgICAgICAgICAgICAgIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICAgICAgICAgICAgICAgX3Jlc3BvbnNpdmVTdGF0ZTogUmVzcG9uc2l2ZVN0YXRlLFxyXG4gICAgICAgICAgICAgICAgIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgICAgICAgICAgICAgICBwbGF0Zm9ybVNlcnZpY2U6IFBsYXRmb3JtU2VydmljZVxyXG4gICAgICAgICkge1xyXG4gICAgICAgIHN1cGVyKCB0ZW1wbGF0ZVJlZiwgdmlld0NvbnRhaW5lciwgX3Jlc3BvbnNpdmVTdGF0ZSwgY2QsIHBsYXRmb3JtU2VydmljZSApO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpIHNldCBoaWRlSXRTaXplcyggX2dyaWRfc3RhdGU6IGFueSApIHtcclxuICAgICAgICB0aGlzLnNldEdyaWQoIF9ncmlkX3N0YXRlLCAnc2l6ZXMnICk7XHJcbiAgICB9XHJcbn1cclxuIl19