/**
 * @name browser-directives
 * @description Browser directives in ngx-responsive
 *
 * @license MIT
 */
import { Directive, Input } from '@angular/core';
import { RESPONSIVE_BASE } from '../../@core/providers/responsive-base/responsive-base';
import * as i0 from "@angular/core";
import * as i1 from "../../@core/providers/responsive-state/responsive-state";
import * as i2 from "../../@core/providers/platform-service/platform.service";
export class IsChromeDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._state = 'chrome';
        this._showWhenTrue = true;
    }
    set isChrome(grid_state) {
        this.setGrid(this._state, 'browser');
    }
}
IsChromeDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsChromeDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: i1.ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: i2.PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
IsChromeDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: IsChromeDirective, selector: "[isChrome]", inputs: { isChrome: "isChrome" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsChromeDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[isChrome]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: i1.ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: i2.PlatformService }]; }, propDecorators: { isChrome: [{
                type: Input
            }] } });
export class IsFirefoxDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._state = 'firefox';
        this._showWhenTrue = true;
    }
    set isFirefox(grid_state) {
        this.setGrid(this._state, 'browser');
    }
}
IsFirefoxDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsFirefoxDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: i1.ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: i2.PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
IsFirefoxDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: IsFirefoxDirective, selector: "[isFirefox]", inputs: { isFirefox: "isFirefox" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsFirefoxDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[isFirefox]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: i1.ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: i2.PlatformService }]; }, propDecorators: { isFirefox: [{
                type: Input
            }] } });
export class IsSafariDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._state = 'safari';
        this._showWhenTrue = true;
    }
    set isSafari(grid_state) {
        this.setGrid(this._state, 'browser');
    }
}
IsSafariDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsSafariDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: i1.ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: i2.PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
IsSafariDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: IsSafariDirective, selector: "[isSafari]", inputs: { isSafari: "isSafari" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsSafariDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[isSafari]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: i1.ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: i2.PlatformService }]; }, propDecorators: { isSafari: [{
                type: Input
            }] } });
export class IsOperaDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._state = 'opera';
        this._showWhenTrue = true;
    }
    set isOpera(grid_state) {
        this.setGrid(this._state, 'browser');
    }
}
IsOperaDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsOperaDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: i1.ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: i2.PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
IsOperaDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: IsOperaDirective, selector: "[isOpera]", inputs: { isOpera: "isOpera" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsOperaDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[isOpera]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: i1.ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: i2.PlatformService }]; }, propDecorators: { isOpera: [{
                type: Input
            }] } });
export class IsIEDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._state = 'ie';
        this._showWhenTrue = true;
    }
    set isIE(grid_state) {
        this.setGrid(this._state, 'browser');
    }
}
IsIEDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsIEDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: i1.ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: i2.PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
IsIEDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: IsIEDirective, selector: "[isIE]", inputs: { isIE: "isIE" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsIEDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[isIE]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: i1.ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: i2.PlatformService }]; }, propDecorators: { isIE: [{
                type: Input
            }] } });
export class ShowItBrowserDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._showWhenTrue = true;
    }
    set showItBrowser(grid_state) {
        this.setGrid(grid_state, 'browser');
    }
}
ShowItBrowserDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ShowItBrowserDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: i1.ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: i2.PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
ShowItBrowserDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: ShowItBrowserDirective, selector: "[showItBrowser]", inputs: { showItBrowser: "showItBrowser" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ShowItBrowserDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[showItBrowser]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: i1.ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: i2.PlatformService }]; }, propDecorators: { showItBrowser: [{
                type: Input
            }] } });
export class HideItBrowserDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._showWhenTrue = false;
    }
    set hideItBrowser(grid_state) {
        this.setGrid(grid_state, 'browser');
    }
}
HideItBrowserDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: HideItBrowserDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: i1.ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: i2.PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
HideItBrowserDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: HideItBrowserDirective, selector: "[hideItBrowser]", inputs: { hideItBrowser: "hideItBrowser" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: HideItBrowserDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hideItBrowser]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: i1.ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: i2.PlatformService }]; }, propDecorators: { hideItBrowser: [{
                type: Input
            }] } });
export class IsIE9Directive extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._state = 'ie 9';
        this._showWhenTrue = true;
    }
    set isIE9(grid_state) {
        this.setGrid(this._state, 'ie');
    }
}
IsIE9Directive.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsIE9Directive, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: i1.ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: i2.PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
IsIE9Directive.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: IsIE9Directive, selector: "[isIE9]", inputs: { isIE9: "isIE9" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsIE9Directive, decorators: [{
            type: Directive,
            args: [{
                    selector: '[isIE9]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: i1.ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: i2.PlatformService }]; }, propDecorators: { isIE9: [{
                type: Input
            }] } });
export class IsIE10Directive extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._state = 'ie 10';
        this._showWhenTrue = true;
    }
    set isIE10(grid_state) {
        this.setGrid(this._state, 'ie');
    }
}
IsIE10Directive.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsIE10Directive, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: i1.ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: i2.PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
IsIE10Directive.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: IsIE10Directive, selector: "[isIE10]", inputs: { isIE10: "isIE10" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsIE10Directive, decorators: [{
            type: Directive,
            args: [{
                    selector: '[isIE10]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: i1.ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: i2.PlatformService }]; }, propDecorators: { isIE10: [{
                type: Input
            }] } });
export class IsIE11Directive extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._state = 'ie 11';
        this._showWhenTrue = true;
    }
    set isIE11(grid_state) {
        this.setGrid(this._state, 'ie');
    }
}
IsIE11Directive.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsIE11Directive, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: i1.ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: i2.PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
IsIE11Directive.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: IsIE11Directive, selector: "[isIE11]", inputs: { isIE11: "isIE11" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsIE11Directive, decorators: [{
            type: Directive,
            args: [{
                    selector: '[isIE11]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: i1.ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: i2.PlatformService }]; }, propDecorators: { isIE11: [{
                type: Input
            }] } });
export class IsIE12Directive extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._state = 'ie 12';
        this._showWhenTrue = true;
    }
    set isIE12(grid_state) {
        this.setGrid(this._state, 'ie');
    }
}
IsIE12Directive.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsIE12Directive, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: i1.ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: i2.PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
IsIE12Directive.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: IsIE12Directive, selector: "[isIE12]", inputs: { isIE12: "isIE12" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsIE12Directive, decorators: [{
            type: Directive,
            args: [{
                    selector: '[isIE12]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: i1.ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: i2.PlatformService }]; }, propDecorators: { isIE12: [{
                type: Input
            }] } });
export class ShowIEVersionDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._showWhenTrue = true;
    }
    set showIEVersion(grid_state) {
        this.setGrid(grid_state, 'ie');
    }
}
ShowIEVersionDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ShowIEVersionDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: i1.ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: i2.PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
ShowIEVersionDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: ShowIEVersionDirective, selector: "[showIEVersion]", inputs: { showIEVersion: "showIEVersion" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ShowIEVersionDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[showIEVersion]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: i1.ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: i2.PlatformService }]; }, propDecorators: { showIEVersion: [{
                type: Input
            }] } });
export class HideIEVersionDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._showWhenTrue = false;
    }
    set hideIEVersion(grid_state) {
        this.setGrid(grid_state, 'ie');
    }
}
HideIEVersionDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: HideIEVersionDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: i1.ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: i2.PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
HideIEVersionDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: HideIEVersionDirective, selector: "[hideIEVersion]", inputs: { hideIEVersion: "hideIEVersion" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: HideIEVersionDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hideIEVersion]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: i1.ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: i2.PlatformService }]; }, propDecorators: { hideIEVersion: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3NlcnMtZGlyZWN0aXZlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9AZGlyZWN0aXZlcy9icm93c2Vycy9icm93c2Vycy1kaXJlY3RpdmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztHQUtHO0FBQ0gsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQW9ELE1BQU0sZUFBZSxDQUFDO0FBR25HLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1REFBdUQsQ0FBQzs7OztBQU94RixNQUFNLE9BQU8saUJBQWtCLFNBQVEsZUFBb0I7SUFPdkQsWUFBYSxXQUE2QixFQUM3QixhQUErQixFQUMvQixnQkFBaUMsRUFDakMsRUFBcUIsRUFDckIsZUFBZ0M7UUFFekMsS0FBSyxDQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsRUFBRSxFQUFFLGVBQWUsQ0FBRSxDQUFDO1FBWHJFLFdBQU0sR0FBRyxRQUFRLENBQUM7UUFDbEIsa0JBQWEsR0FBRyxJQUFJLENBQUM7SUFXL0IsQ0FBQztJQVZELElBQWEsUUFBUSxDQUFFLFVBQTZCO1FBQ2hELElBQUksQ0FBQyxPQUFPLENBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUUsQ0FBQztJQUMzQyxDQUFDOzs4R0FOUSxpQkFBaUI7a0dBQWpCLGlCQUFpQjsyRkFBakIsaUJBQWlCO2tCQUo3QixTQUFTO21CQUNWO29CQUNJLFFBQVEsRUFBRSxZQUFZO2lCQUN6Qjs2TkFLZ0IsUUFBUTtzQkFBcEIsS0FBSzs7QUFpQlYsTUFBTSxPQUFPLGtCQUFtQixTQUFRLGVBQW9CO0lBT3hELFlBQWEsV0FBNkIsRUFDN0IsYUFBK0IsRUFDL0IsZ0JBQWlDLEVBQ2pDLEVBQXFCLEVBQ3JCLGVBQWdDO1FBRXpDLEtBQUssQ0FBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLEVBQUUsRUFBRSxlQUFlLENBQUUsQ0FBQztRQVhyRSxXQUFNLEdBQUcsU0FBUyxDQUFDO1FBQ25CLGtCQUFhLEdBQUcsSUFBSSxDQUFDO0lBVy9CLENBQUM7SUFWRCxJQUFhLFNBQVMsQ0FBRSxVQUE2QjtRQUNqRCxJQUFJLENBQUMsT0FBTyxDQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFFLENBQUM7SUFDM0MsQ0FBQzs7K0dBTlEsa0JBQWtCO21HQUFsQixrQkFBa0I7MkZBQWxCLGtCQUFrQjtrQkFKOUIsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsYUFBYTtpQkFDMUI7Nk5BTWdCLFNBQVM7c0JBQXJCLEtBQUs7O0FBaUJWLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxlQUFvQjtJQU92RCxZQUFhLFdBQTZCLEVBQzdCLGFBQStCLEVBQy9CLGdCQUFpQyxFQUNqQyxFQUFxQixFQUNyQixlQUFnQztRQUV6QyxLQUFLLENBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsZUFBZSxDQUFFLENBQUM7UUFYckUsV0FBTSxHQUFHLFFBQVEsQ0FBQztRQUNsQixrQkFBYSxHQUFHLElBQUksQ0FBQztJQVcvQixDQUFDO0lBVkQsSUFBYSxRQUFRLENBQUUsVUFBNkI7UUFDaEQsSUFBSSxDQUFDLE9BQU8sQ0FBRSxJQUFJLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBRSxDQUFDO0lBQzNDLENBQUM7OzhHQU5RLGlCQUFpQjtrR0FBakIsaUJBQWlCOzJGQUFqQixpQkFBaUI7a0JBSjdCLFNBQVM7bUJBQ1Y7b0JBQ0ksUUFBUSxFQUFFLFlBQVk7aUJBQ3pCOzZOQUtnQixRQUFRO3NCQUFwQixLQUFLOztBQWlCVixNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsZUFBb0I7SUFPdEQsWUFBYSxXQUE2QixFQUM3QixhQUErQixFQUMvQixnQkFBaUMsRUFDakMsRUFBcUIsRUFDckIsZUFBZ0M7UUFFekMsS0FBSyxDQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsRUFBRSxFQUFFLGVBQWUsQ0FBRSxDQUFDO1FBWHJFLFdBQU0sR0FBRyxPQUFPLENBQUM7UUFDakIsa0JBQWEsR0FBRyxJQUFJLENBQUM7SUFXL0IsQ0FBQztJQVZELElBQWEsT0FBTyxDQUFFLFVBQTZCO1FBQy9DLElBQUksQ0FBQyxPQUFPLENBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUUsQ0FBQztJQUMzQyxDQUFDOzs2R0FOUSxnQkFBZ0I7aUdBQWhCLGdCQUFnQjsyRkFBaEIsZ0JBQWdCO2tCQUo1QixTQUFTO21CQUNWO29CQUNJLFFBQVEsRUFBRSxXQUFXO2lCQUN4Qjs2TkFLZ0IsT0FBTztzQkFBbkIsS0FBSzs7QUFpQlYsTUFBTSxPQUFPLGFBQWMsU0FBUSxlQUFvQjtJQU9uRCxZQUFhLFdBQTZCLEVBQzdCLGFBQStCLEVBQy9CLGdCQUFpQyxFQUNqQyxFQUFxQixFQUNyQixlQUFnQztRQUV6QyxLQUFLLENBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsZUFBZSxDQUFFLENBQUM7UUFYckUsV0FBTSxHQUFHLElBQUksQ0FBQztRQUNkLGtCQUFhLEdBQUcsSUFBSSxDQUFDO0lBVy9CLENBQUM7SUFWRCxJQUFhLElBQUksQ0FBRSxVQUE2QjtRQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFFLENBQUM7SUFDM0MsQ0FBQzs7MEdBTlEsYUFBYTs4RkFBYixhQUFhOzJGQUFiLGFBQWE7a0JBSnpCLFNBQVM7bUJBQ1Y7b0JBQ0ksUUFBUSxFQUFFLFFBQVE7aUJBQ3JCOzZOQUtnQixJQUFJO3NCQUFoQixLQUFLOztBQWlCVixNQUFNLE9BQU8sc0JBQXVCLFNBQVEsZUFBb0I7SUFNNUQsWUFBYSxXQUE2QixFQUM3QixhQUErQixFQUMvQixnQkFBaUMsRUFDakMsRUFBcUIsRUFDckIsZUFBZ0M7UUFFekMsS0FBSyxDQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsRUFBRSxFQUFFLGVBQWUsQ0FBRSxDQUFDO1FBVnJFLGtCQUFhLEdBQUcsSUFBSSxDQUFDO0lBVy9CLENBQUM7SUFWRCxJQUFhLGFBQWEsQ0FBRSxVQUE2QjtRQUNyRCxJQUFJLENBQUMsT0FBTyxDQUFFLFVBQVUsRUFBRSxTQUFTLENBQUUsQ0FBQztJQUMxQyxDQUFDOzttSEFMUSxzQkFBc0I7dUdBQXRCLHNCQUFzQjsyRkFBdEIsc0JBQXNCO2tCQUpsQyxTQUFTO21CQUNWO29CQUNJLFFBQVEsRUFBRSxpQkFBaUI7aUJBQzlCOzZOQUlnQixhQUFhO3NCQUF6QixLQUFLOztBQWlCVixNQUFNLE9BQU8sc0JBQXVCLFNBQVEsZUFBb0I7SUFNNUQsWUFBYSxXQUE2QixFQUM3QixhQUErQixFQUMvQixnQkFBaUMsRUFDakMsRUFBcUIsRUFDckIsZUFBZ0M7UUFFekMsS0FBSyxDQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsRUFBRSxFQUFFLGVBQWUsQ0FBRSxDQUFDO1FBVnJFLGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBV2hDLENBQUM7SUFWRCxJQUFhLGFBQWEsQ0FBRSxVQUE2QjtRQUNyRCxJQUFJLENBQUMsT0FBTyxDQUFFLFVBQVUsRUFBRSxTQUFTLENBQUUsQ0FBQztJQUMxQyxDQUFDOzttSEFMUSxzQkFBc0I7dUdBQXRCLHNCQUFzQjsyRkFBdEIsc0JBQXNCO2tCQUpsQyxTQUFTO21CQUNWO29CQUNJLFFBQVEsRUFBRSxpQkFBaUI7aUJBQzlCOzZOQUlnQixhQUFhO3NCQUF6QixLQUFLOztBQWlCVixNQUFNLE9BQU8sY0FBZSxTQUFRLGVBQW9CO0lBT3BELFlBQWEsV0FBNkIsRUFDN0IsYUFBK0IsRUFDL0IsZ0JBQWlDLEVBQ2pDLEVBQXFCLEVBQ3JCLGVBQWdDO1FBRXpDLEtBQUssQ0FBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLEVBQUUsRUFBRSxlQUFlLENBQUUsQ0FBQztRQVhyRSxXQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ2hCLGtCQUFhLEdBQUcsSUFBSSxDQUFDO0lBVy9CLENBQUM7SUFWRCxJQUFhLEtBQUssQ0FBRSxVQUE2QjtRQUM3QyxJQUFJLENBQUMsT0FBTyxDQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFFLENBQUM7SUFDdEMsQ0FBQzs7MkdBTlEsY0FBYzsrRkFBZCxjQUFjOzJGQUFkLGNBQWM7a0JBSjFCLFNBQVM7bUJBQ1Y7b0JBQ0ksUUFBUSxFQUFFLFNBQVM7aUJBQ3RCOzZOQUtnQixLQUFLO3NCQUFqQixLQUFLOztBQWlCVixNQUFNLE9BQU8sZUFBZ0IsU0FBUSxlQUFvQjtJQU9yRCxZQUFhLFdBQTZCLEVBQzdCLGFBQStCLEVBQy9CLGdCQUFpQyxFQUNqQyxFQUFxQixFQUNyQixlQUFnQztRQUV6QyxLQUFLLENBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsZUFBZSxDQUFFLENBQUM7UUFYckUsV0FBTSxHQUFHLE9BQU8sQ0FBQztRQUNqQixrQkFBYSxHQUFHLElBQUksQ0FBQztJQVcvQixDQUFDO0lBVkQsSUFBYSxNQUFNLENBQUUsVUFBNkI7UUFDOUMsSUFBSSxDQUFDLE9BQU8sQ0FBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBRSxDQUFDO0lBQ3RDLENBQUM7OzRHQU5RLGVBQWU7Z0dBQWYsZUFBZTsyRkFBZixlQUFlO2tCQUozQixTQUFTO21CQUNWO29CQUNJLFFBQVEsRUFBRSxVQUFVO2lCQUN2Qjs2TkFLZ0IsTUFBTTtzQkFBbEIsS0FBSzs7QUFpQlYsTUFBTSxPQUFPLGVBQWdCLFNBQVEsZUFBb0I7SUFPckQsWUFBYSxXQUE2QixFQUM3QixhQUErQixFQUMvQixnQkFBaUMsRUFDakMsRUFBcUIsRUFDckIsZUFBZ0M7UUFFekMsS0FBSyxDQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsRUFBRSxFQUFFLGVBQWUsQ0FBRSxDQUFDO1FBWHJFLFdBQU0sR0FBRyxPQUFPLENBQUM7UUFDakIsa0JBQWEsR0FBRyxJQUFJLENBQUM7SUFXL0IsQ0FBQztJQVZELElBQWEsTUFBTSxDQUFFLFVBQTZCO1FBQzlDLElBQUksQ0FBQyxPQUFPLENBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUUsQ0FBQztJQUN0QyxDQUFDOzs0R0FOUSxlQUFlO2dHQUFmLGVBQWU7MkZBQWYsZUFBZTtrQkFKM0IsU0FBUzttQkFDVjtvQkFDSSxRQUFRLEVBQUUsVUFBVTtpQkFDdkI7Nk5BS2dCLE1BQU07c0JBQWxCLEtBQUs7O0FBaUJWLE1BQU0sT0FBTyxlQUFnQixTQUFRLGVBQW9CO0lBT3JELFlBQWEsV0FBNkIsRUFDN0IsYUFBK0IsRUFDL0IsZ0JBQWlDLEVBQ2pDLEVBQXFCLEVBQ3JCLGVBQWdDO1FBRXpDLEtBQUssQ0FBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLEVBQUUsRUFBRSxlQUFlLENBQUUsQ0FBQztRQVhyRSxXQUFNLEdBQUcsT0FBTyxDQUFDO1FBQ2pCLGtCQUFhLEdBQUcsSUFBSSxDQUFDO0lBVy9CLENBQUM7SUFWRCxJQUFhLE1BQU0sQ0FBRSxVQUE2QjtRQUM5QyxJQUFJLENBQUMsT0FBTyxDQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFFLENBQUM7SUFDdEMsQ0FBQzs7NEdBTlEsZUFBZTtnR0FBZixlQUFlOzJGQUFmLGVBQWU7a0JBSjNCLFNBQVM7bUJBQ1Y7b0JBQ0ksUUFBUSxFQUFFLFVBQVU7aUJBQ3ZCOzZOQUtnQixNQUFNO3NCQUFsQixLQUFLOztBQWlCVixNQUFNLE9BQU8sc0JBQXVCLFNBQVEsZUFBb0I7SUFNNUQsWUFBYSxXQUE2QixFQUM3QixhQUErQixFQUMvQixnQkFBaUMsRUFDakMsRUFBcUIsRUFDckIsZUFBZ0M7UUFFekMsS0FBSyxDQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsRUFBRSxFQUFFLGVBQWUsQ0FBRSxDQUFDO1FBVnJFLGtCQUFhLEdBQUcsSUFBSSxDQUFDO0lBVy9CLENBQUM7SUFWRCxJQUFhLGFBQWEsQ0FBRSxVQUE2QjtRQUNyRCxJQUFJLENBQUMsT0FBTyxDQUFFLFVBQVUsRUFBRSxJQUFJLENBQUUsQ0FBQztJQUNyQyxDQUFDOzttSEFMUSxzQkFBc0I7dUdBQXRCLHNCQUFzQjsyRkFBdEIsc0JBQXNCO2tCQUpsQyxTQUFTO21CQUNWO29CQUNJLFFBQVEsRUFBRSxpQkFBaUI7aUJBQzlCOzZOQUlnQixhQUFhO3NCQUF6QixLQUFLOztBQWlCVixNQUFNLE9BQU8sc0JBQXVCLFNBQVEsZUFBb0I7SUFNNUQsWUFBYSxXQUE2QixFQUM3QixhQUErQixFQUMvQixnQkFBaUMsRUFDakMsRUFBcUIsRUFDckIsZUFBZ0M7UUFFekMsS0FBSyxDQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsRUFBRSxFQUFFLGVBQWUsQ0FBRSxDQUFDO1FBVnJFLGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBV2hDLENBQUM7SUFWRCxJQUFhLGFBQWEsQ0FBRSxVQUE2QjtRQUNyRCxJQUFJLENBQUMsT0FBTyxDQUFFLFVBQVUsRUFBRSxJQUFJLENBQUUsQ0FBQztJQUNyQyxDQUFDOzttSEFMUSxzQkFBc0I7dUdBQXRCLHNCQUFzQjsyRkFBdEIsc0JBQXNCO2tCQUpsQyxTQUFTO21CQUNWO29CQUNJLFFBQVEsRUFBRSxpQkFBaUI7aUJBQzlCOzZOQUlnQixhQUFhO3NCQUF6QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBuYW1lIGJyb3dzZXItZGlyZWN0aXZlc1xyXG4gKiBAZGVzY3JpcHRpb24gQnJvd3NlciBkaXJlY3RpdmVzIGluIG5neC1yZXNwb25zaXZlXHJcbiAqXHJcbiAqIEBsaWNlbnNlIE1JVFxyXG4gKi9cclxuaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBSZXNwb25zaXZlU3RhdGUgfSBmcm9tICcuLi8uLi9AY29yZS9wcm92aWRlcnMvcmVzcG9uc2l2ZS1zdGF0ZS9yZXNwb25zaXZlLXN0YXRlJztcclxuaW1wb3J0IHsgUkVTUE9OU0lWRV9CQVNFIH0gZnJvbSAnLi4vLi4vQGNvcmUvcHJvdmlkZXJzL3Jlc3BvbnNpdmUtYmFzZS9yZXNwb25zaXZlLWJhc2UnO1xyXG5pbXBvcnQgeyBQbGF0Zm9ybVNlcnZpY2UgfSBmcm9tICcuLi8uLi9AY29yZS9wcm92aWRlcnMvcGxhdGZvcm0tc2VydmljZS9wbGF0Zm9ybS5zZXJ2aWNlJztcclxuXHJcbkBEaXJlY3RpdmUoXHJcbntcclxuICAgIHNlbGVjdG9yOiAnW2lzQ2hyb21lXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIElzQ2hyb21lRGlyZWN0aXZlIGV4dGVuZHMgUkVTUE9OU0lWRV9CQVNFPGFueT4ge1xyXG5cclxuICAgIHByb3RlY3RlZCBfc3RhdGUgPSAnY2hyb21lJztcclxuICAgIHByb3RlY3RlZCBfc2hvd1doZW5UcnVlID0gdHJ1ZTtcclxuICAgIEBJbnB1dCgpIHNldCBpc0Nocm9tZSggZ3JpZF9zdGF0ZTogc3RyaW5nW10gfCBzdHJpbmcgKSB7XHJcbiAgICAgICAgdGhpcy5zZXRHcmlkKCB0aGlzLl9zdGF0ZSwgJ2Jyb3dzZXInICk7XHJcbiAgICB9XHJcbiAgICBjb25zdHJ1Y3RvciggdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sXHJcbiAgICAgICAgICAgICAgICAgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZixcclxuICAgICAgICAgICAgICAgICBfcmVzcG9uc2l2ZVN0YXRlOiBSZXNwb25zaXZlU3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgICAgICAgICAgICAgIHBsYXRmb3JtU2VydmljZTogUGxhdGZvcm1TZXJ2aWNlXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgc3VwZXIoIHRlbXBsYXRlUmVmLCB2aWV3Q29udGFpbmVyLCBfcmVzcG9uc2l2ZVN0YXRlLCBjZCwgcGxhdGZvcm1TZXJ2aWNlICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbaXNGaXJlZm94XSdcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBJc0ZpcmVmb3hEaXJlY3RpdmUgZXh0ZW5kcyBSRVNQT05TSVZFX0JBU0U8YW55PiB7XHJcblxyXG4gICAgcHJvdGVjdGVkIF9zdGF0ZSA9ICdmaXJlZm94JztcclxuICAgIHByb3RlY3RlZCBfc2hvd1doZW5UcnVlID0gdHJ1ZTtcclxuICAgIEBJbnB1dCgpIHNldCBpc0ZpcmVmb3goIGdyaWRfc3RhdGU6IHN0cmluZ1tdIHwgc3RyaW5nICkge1xyXG4gICAgICAgIHRoaXMuc2V0R3JpZCggdGhpcy5fc3RhdGUsICdicm93c2VyJyApO1xyXG4gICAgfVxyXG4gICAgY29uc3RydWN0b3IoIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LFxyXG4gICAgICAgICAgICAgICAgIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICAgICAgICAgICAgICAgX3Jlc3BvbnNpdmVTdGF0ZTogUmVzcG9uc2l2ZVN0YXRlLFxyXG4gICAgICAgICAgICAgICAgIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgICAgICAgICAgICAgICBwbGF0Zm9ybVNlcnZpY2U6IFBsYXRmb3JtU2VydmljZVxyXG4gICAgICAgICkge1xyXG4gICAgICAgIHN1cGVyKCB0ZW1wbGF0ZVJlZiwgdmlld0NvbnRhaW5lciwgX3Jlc3BvbnNpdmVTdGF0ZSwgY2QsIHBsYXRmb3JtU2VydmljZSApO1xyXG4gICAgfVxyXG59XHJcblxyXG5ARGlyZWN0aXZlKFxyXG57XHJcbiAgICBzZWxlY3RvcjogJ1tpc1NhZmFyaV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJc1NhZmFyaURpcmVjdGl2ZSBleHRlbmRzIFJFU1BPTlNJVkVfQkFTRTxhbnk+IHtcclxuXHJcbiAgICBwcm90ZWN0ZWQgX3N0YXRlID0gJ3NhZmFyaSc7XHJcbiAgICBwcm90ZWN0ZWQgX3Nob3dXaGVuVHJ1ZSA9IHRydWU7XHJcbiAgICBASW5wdXQoKSBzZXQgaXNTYWZhcmkoIGdyaWRfc3RhdGU6IHN0cmluZ1tdIHwgc3RyaW5nICkge1xyXG4gICAgICAgIHRoaXMuc2V0R3JpZCggdGhpcy5fc3RhdGUsICdicm93c2VyJyApO1xyXG4gICAgfVxyXG4gICAgY29uc3RydWN0b3IoIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LFxyXG4gICAgICAgICAgICAgICAgIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICAgICAgICAgICAgICAgX3Jlc3BvbnNpdmVTdGF0ZTogUmVzcG9uc2l2ZVN0YXRlLFxyXG4gICAgICAgICAgICAgICAgIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgICAgICAgICAgICAgICBwbGF0Zm9ybVNlcnZpY2U6IFBsYXRmb3JtU2VydmljZVxyXG4gICAgICAgICkge1xyXG4gICAgICAgIHN1cGVyKCB0ZW1wbGF0ZVJlZiwgdmlld0NvbnRhaW5lciwgX3Jlc3BvbnNpdmVTdGF0ZSwgY2QsIHBsYXRmb3JtU2VydmljZSApO1xyXG4gICAgfVxyXG59XHJcblxyXG5ARGlyZWN0aXZlKFxyXG57XHJcbiAgICBzZWxlY3RvcjogJ1tpc09wZXJhXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIElzT3BlcmFEaXJlY3RpdmUgZXh0ZW5kcyBSRVNQT05TSVZFX0JBU0U8YW55PiB7XHJcblxyXG4gICAgcHJvdGVjdGVkIF9zdGF0ZSA9ICdvcGVyYSc7XHJcbiAgICBwcm90ZWN0ZWQgX3Nob3dXaGVuVHJ1ZSA9IHRydWU7XHJcbiAgICBASW5wdXQoKSBzZXQgaXNPcGVyYSggZ3JpZF9zdGF0ZTogc3RyaW5nW10gfCBzdHJpbmcgKSB7XHJcbiAgICAgICAgdGhpcy5zZXRHcmlkKCB0aGlzLl9zdGF0ZSwgJ2Jyb3dzZXInICk7XHJcbiAgICB9XHJcbiAgICBjb25zdHJ1Y3RvciggdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sXHJcbiAgICAgICAgICAgICAgICAgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZixcclxuICAgICAgICAgICAgICAgICBfcmVzcG9uc2l2ZVN0YXRlOiBSZXNwb25zaXZlU3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgICAgICAgICAgICAgIHBsYXRmb3JtU2VydmljZTogUGxhdGZvcm1TZXJ2aWNlXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgc3VwZXIoIHRlbXBsYXRlUmVmLCB2aWV3Q29udGFpbmVyLCBfcmVzcG9uc2l2ZVN0YXRlLCBjZCwgcGxhdGZvcm1TZXJ2aWNlICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoXHJcbntcclxuICAgIHNlbGVjdG9yOiAnW2lzSUVdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSXNJRURpcmVjdGl2ZSBleHRlbmRzIFJFU1BPTlNJVkVfQkFTRTxhbnk+IHtcclxuXHJcbiAgICBwcm90ZWN0ZWQgX3N0YXRlID0gJ2llJztcclxuICAgIHByb3RlY3RlZCBfc2hvd1doZW5UcnVlID0gdHJ1ZTtcclxuICAgIEBJbnB1dCgpIHNldCBpc0lFKCBncmlkX3N0YXRlOiBzdHJpbmdbXSB8IHN0cmluZyApIHtcclxuICAgICAgICB0aGlzLnNldEdyaWQoIHRoaXMuX3N0YXRlLCAnYnJvd3NlcicgKTtcclxuICAgIH1cclxuICAgIGNvbnN0cnVjdG9yKCB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PixcclxuICAgICAgICAgICAgICAgICB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICAgICAgICAgICAgIF9yZXNwb25zaXZlU3RhdGU6IFJlc3BvbnNpdmVTdGF0ZSxcclxuICAgICAgICAgICAgICAgICBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICAgICAgICAgICAgICAgcGxhdGZvcm1TZXJ2aWNlOiBQbGF0Zm9ybVNlcnZpY2VcclxuICAgICAgICApIHtcclxuICAgICAgICBzdXBlciggdGVtcGxhdGVSZWYsIHZpZXdDb250YWluZXIsIF9yZXNwb25zaXZlU3RhdGUsIGNkLCBwbGF0Zm9ybVNlcnZpY2UgKTtcclxuICAgIH1cclxufVxyXG5cclxuQERpcmVjdGl2ZShcclxue1xyXG4gICAgc2VsZWN0b3I6ICdbc2hvd0l0QnJvd3Nlcl0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaG93SXRCcm93c2VyRGlyZWN0aXZlIGV4dGVuZHMgUkVTUE9OU0lWRV9CQVNFPGFueT4ge1xyXG5cclxuICAgIHByb3RlY3RlZCBfc2hvd1doZW5UcnVlID0gdHJ1ZTtcclxuICAgIEBJbnB1dCgpIHNldCBzaG93SXRCcm93c2VyKCBncmlkX3N0YXRlOiBzdHJpbmdbXSB8IHN0cmluZyApIHtcclxuICAgICAgICB0aGlzLnNldEdyaWQoIGdyaWRfc3RhdGUsICdicm93c2VyJyApO1xyXG4gICAgfVxyXG4gICAgY29uc3RydWN0b3IoIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LFxyXG4gICAgICAgICAgICAgICAgIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICAgICAgICAgICAgICAgX3Jlc3BvbnNpdmVTdGF0ZTogUmVzcG9uc2l2ZVN0YXRlLFxyXG4gICAgICAgICAgICAgICAgIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgICAgICAgICAgICAgICBwbGF0Zm9ybVNlcnZpY2U6IFBsYXRmb3JtU2VydmljZVxyXG4gICAgICAgICkge1xyXG4gICAgICAgIHN1cGVyKCB0ZW1wbGF0ZVJlZiwgdmlld0NvbnRhaW5lciwgX3Jlc3BvbnNpdmVTdGF0ZSwgY2QsIHBsYXRmb3JtU2VydmljZSApO1xyXG4gICAgfVxyXG59XHJcblxyXG5ARGlyZWN0aXZlKFxyXG57XHJcbiAgICBzZWxlY3RvcjogJ1toaWRlSXRCcm93c2VyXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIEhpZGVJdEJyb3dzZXJEaXJlY3RpdmUgZXh0ZW5kcyBSRVNQT05TSVZFX0JBU0U8YW55PiB7XHJcblxyXG4gICAgcHJvdGVjdGVkIF9zaG93V2hlblRydWUgPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIHNldCBoaWRlSXRCcm93c2VyKCBncmlkX3N0YXRlOiBzdHJpbmdbXSB8IHN0cmluZyApIHtcclxuICAgICAgICB0aGlzLnNldEdyaWQoIGdyaWRfc3RhdGUsICdicm93c2VyJyApO1xyXG4gICAgfVxyXG4gICAgY29uc3RydWN0b3IoIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LFxyXG4gICAgICAgICAgICAgICAgIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICAgICAgICAgICAgICAgX3Jlc3BvbnNpdmVTdGF0ZTogUmVzcG9uc2l2ZVN0YXRlLFxyXG4gICAgICAgICAgICAgICAgIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgICAgICAgICAgICAgICBwbGF0Zm9ybVNlcnZpY2U6IFBsYXRmb3JtU2VydmljZVxyXG4gICAgICAgICkge1xyXG4gICAgICAgIHN1cGVyKCB0ZW1wbGF0ZVJlZiwgdmlld0NvbnRhaW5lciwgX3Jlc3BvbnNpdmVTdGF0ZSwgY2QsIHBsYXRmb3JtU2VydmljZSApO1xyXG4gICAgfVxyXG59XHJcblxyXG5ARGlyZWN0aXZlKFxyXG57XHJcbiAgICBzZWxlY3RvcjogJ1tpc0lFOV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJc0lFOURpcmVjdGl2ZSBleHRlbmRzIFJFU1BPTlNJVkVfQkFTRTxhbnk+IHtcclxuXHJcbiAgICBwcm90ZWN0ZWQgX3N0YXRlID0gJ2llIDknO1xyXG4gICAgcHJvdGVjdGVkIF9zaG93V2hlblRydWUgPSB0cnVlO1xyXG4gICAgQElucHV0KCkgc2V0IGlzSUU5KCBncmlkX3N0YXRlOiBzdHJpbmdbXSB8IHN0cmluZyApIHtcclxuICAgICAgICB0aGlzLnNldEdyaWQoIHRoaXMuX3N0YXRlLCAnaWUnICk7XHJcbiAgICB9XHJcbiAgICBjb25zdHJ1Y3RvciggdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sXHJcbiAgICAgICAgICAgICAgICAgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZixcclxuICAgICAgICAgICAgICAgICBfcmVzcG9uc2l2ZVN0YXRlOiBSZXNwb25zaXZlU3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgICAgICAgICAgICAgIHBsYXRmb3JtU2VydmljZTogUGxhdGZvcm1TZXJ2aWNlXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgc3VwZXIoIHRlbXBsYXRlUmVmLCB2aWV3Q29udGFpbmVyLCBfcmVzcG9uc2l2ZVN0YXRlLCBjZCwgcGxhdGZvcm1TZXJ2aWNlICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoXHJcbntcclxuICAgIHNlbGVjdG9yOiAnW2lzSUUxMF0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJc0lFMTBEaXJlY3RpdmUgZXh0ZW5kcyBSRVNQT05TSVZFX0JBU0U8YW55PiB7XHJcblxyXG4gICAgcHJvdGVjdGVkIF9zdGF0ZSA9ICdpZSAxMCc7XHJcbiAgICBwcm90ZWN0ZWQgX3Nob3dXaGVuVHJ1ZSA9IHRydWU7XHJcbiAgICBASW5wdXQoKSBzZXQgaXNJRTEwKCBncmlkX3N0YXRlOiBzdHJpbmdbXSB8IHN0cmluZyApIHtcclxuICAgICAgICB0aGlzLnNldEdyaWQoIHRoaXMuX3N0YXRlLCAnaWUnICk7XHJcbiAgICB9XHJcbiAgICBjb25zdHJ1Y3RvciggdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sXHJcbiAgICAgICAgICAgICAgICAgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZixcclxuICAgICAgICAgICAgICAgICBfcmVzcG9uc2l2ZVN0YXRlOiBSZXNwb25zaXZlU3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgICAgICAgICAgICAgIHBsYXRmb3JtU2VydmljZTogUGxhdGZvcm1TZXJ2aWNlXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgc3VwZXIoIHRlbXBsYXRlUmVmLCB2aWV3Q29udGFpbmVyLCBfcmVzcG9uc2l2ZVN0YXRlLCBjZCwgcGxhdGZvcm1TZXJ2aWNlICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoXHJcbntcclxuICAgIHNlbGVjdG9yOiAnW2lzSUUxMV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJc0lFMTFEaXJlY3RpdmUgZXh0ZW5kcyBSRVNQT05TSVZFX0JBU0U8YW55PiB7XHJcblxyXG4gICAgcHJvdGVjdGVkIF9zdGF0ZSA9ICdpZSAxMSc7XHJcbiAgICBwcm90ZWN0ZWQgX3Nob3dXaGVuVHJ1ZSA9IHRydWU7XHJcbiAgICBASW5wdXQoKSBzZXQgaXNJRTExKCBncmlkX3N0YXRlOiBzdHJpbmdbXSB8IHN0cmluZyApIHtcclxuICAgICAgICB0aGlzLnNldEdyaWQoIHRoaXMuX3N0YXRlLCAnaWUnICk7XHJcbiAgICB9XHJcbiAgICBjb25zdHJ1Y3RvciggdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sXHJcbiAgICAgICAgICAgICAgICAgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZixcclxuICAgICAgICAgICAgICAgICBfcmVzcG9uc2l2ZVN0YXRlOiBSZXNwb25zaXZlU3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgICAgICAgICAgICAgIHBsYXRmb3JtU2VydmljZTogUGxhdGZvcm1TZXJ2aWNlXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgc3VwZXIoIHRlbXBsYXRlUmVmLCB2aWV3Q29udGFpbmVyLCBfcmVzcG9uc2l2ZVN0YXRlLCBjZCwgcGxhdGZvcm1TZXJ2aWNlICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoXHJcbntcclxuICAgIHNlbGVjdG9yOiAnW2lzSUUxMl0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJc0lFMTJEaXJlY3RpdmUgZXh0ZW5kcyBSRVNQT05TSVZFX0JBU0U8YW55PiB7XHJcblxyXG4gICAgcHJvdGVjdGVkIF9zdGF0ZSA9ICdpZSAxMic7XHJcbiAgICBwcm90ZWN0ZWQgX3Nob3dXaGVuVHJ1ZSA9IHRydWU7XHJcbiAgICBASW5wdXQoKSBzZXQgaXNJRTEyKCBncmlkX3N0YXRlOiBzdHJpbmdbXSB8IHN0cmluZyApIHtcclxuICAgICAgICB0aGlzLnNldEdyaWQoIHRoaXMuX3N0YXRlLCAnaWUnICk7XHJcbiAgICB9XHJcbiAgICBjb25zdHJ1Y3RvciggdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sXHJcbiAgICAgICAgICAgICAgICAgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZixcclxuICAgICAgICAgICAgICAgICBfcmVzcG9uc2l2ZVN0YXRlOiBSZXNwb25zaXZlU3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgICAgICAgICAgICAgIHBsYXRmb3JtU2VydmljZTogUGxhdGZvcm1TZXJ2aWNlXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgc3VwZXIoIHRlbXBsYXRlUmVmLCB2aWV3Q29udGFpbmVyLCBfcmVzcG9uc2l2ZVN0YXRlLCBjZCwgcGxhdGZvcm1TZXJ2aWNlICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoXHJcbntcclxuICAgIHNlbGVjdG9yOiAnW3Nob3dJRVZlcnNpb25dJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU2hvd0lFVmVyc2lvbkRpcmVjdGl2ZSBleHRlbmRzIFJFU1BPTlNJVkVfQkFTRTxhbnk+IHtcclxuXHJcbiAgICBwcm90ZWN0ZWQgX3Nob3dXaGVuVHJ1ZSA9IHRydWU7XHJcbiAgICBASW5wdXQoKSBzZXQgc2hvd0lFVmVyc2lvbiggZ3JpZF9zdGF0ZTogc3RyaW5nW10gfCBzdHJpbmcgKSB7XHJcbiAgICAgICAgdGhpcy5zZXRHcmlkKCBncmlkX3N0YXRlLCAnaWUnICk7XHJcbiAgICB9XHJcbiAgICBjb25zdHJ1Y3RvciggdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sXHJcbiAgICAgICAgICAgICAgICAgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZixcclxuICAgICAgICAgICAgICAgICBfcmVzcG9uc2l2ZVN0YXRlOiBSZXNwb25zaXZlU3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgICAgICAgICAgICAgIHBsYXRmb3JtU2VydmljZTogUGxhdGZvcm1TZXJ2aWNlIFxyXG4gICAgICAgICkge1xyXG4gICAgICAgIHN1cGVyKCB0ZW1wbGF0ZVJlZiwgdmlld0NvbnRhaW5lciwgX3Jlc3BvbnNpdmVTdGF0ZSwgY2QsIHBsYXRmb3JtU2VydmljZSApO1xyXG4gICAgfVxyXG59XHJcblxyXG5ARGlyZWN0aXZlKFxyXG57XHJcbiAgICBzZWxlY3RvcjogJ1toaWRlSUVWZXJzaW9uXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIEhpZGVJRVZlcnNpb25EaXJlY3RpdmUgZXh0ZW5kcyBSRVNQT05TSVZFX0JBU0U8YW55PiB7XHJcblxyXG4gICAgcHJvdGVjdGVkIF9zaG93V2hlblRydWUgPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIHNldCBoaWRlSUVWZXJzaW9uKCBncmlkX3N0YXRlOiBzdHJpbmdbXSB8IHN0cmluZyApIHtcclxuICAgICAgICB0aGlzLnNldEdyaWQoIGdyaWRfc3RhdGUsICdpZScgKTtcclxuICAgIH1cclxuICAgIGNvbnN0cnVjdG9yKCB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PixcclxuICAgICAgICAgICAgICAgICB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICAgICAgICAgICAgIF9yZXNwb25zaXZlU3RhdGU6IFJlc3BvbnNpdmVTdGF0ZSxcclxuICAgICAgICAgICAgICAgICBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICAgICAgICAgICAgICAgcGxhdGZvcm1TZXJ2aWNlOiBQbGF0Zm9ybVNlcnZpY2UgXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgc3VwZXIoIHRlbXBsYXRlUmVmLCB2aWV3Q29udGFpbmVyLCBfcmVzcG9uc2l2ZVN0YXRlLCBjZCwgcGxhdGZvcm1TZXJ2aWNlICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuIl19