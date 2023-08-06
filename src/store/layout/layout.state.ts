import { Injectable } from '@angular/core';
import { NgxsOnInit, Selector, State, StateContext } from '@ngxs/store';

import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';

// based on PrimeNG $lg default https://www.primefaces.org/primeng/showcase/#/primeflex
const smBreakpoint = ['(max-width: 640px)'];
const mdBreakpoint = ['(max-width: 720px)', '(min-width: 640px)'];
const lgBreakpoint = ['(max-width: 992px)', '(min-width: 720px)'];
const xlBreakpoint = ['(max-width: 1080px)', '(min-width: 992px)'];
const desktopBreakpoint = ['(max-width: 992px)'];

const smallHeightBreakpoint = ['(max-height: 600px)'];

export enum Layout {
  TABLET = 'TABLET',
  DESKTOP = 'DESKTOP',
}
export enum PrimeLayout {
  SM = 'SM',
  MD = 'MD',
  LG = 'LG',
  XL = 'XL',
}
export enum HeightLayout {
  SMALL = 'SMALL',
  BIG = 'BIG',
}
class LayoutStateModel {
  layout: Layout;
  primeLayout: PrimeLayout;
  heightLayout: HeightLayout;
  portrait: boolean;
}

@State<LayoutStateModel>({
  name: 'layout',
  defaults: {
    layout: Layout.DESKTOP,
    primeLayout: PrimeLayout.XL,
    heightLayout: HeightLayout.BIG,
    portrait: true,
  },
})
@Injectable()
export class LayoutState implements NgxsOnInit {
  constructor(private breakpointObserver: BreakpointObserver) {}

  @Selector()
  static layout(state: LayoutStateModel): Layout {
    return state.layout;
  }

  @Selector()
  static primeLayout(state: LayoutStateModel): PrimeLayout {
    return state.primeLayout;
  }

  @Selector()
  static heightLayout(state: LayoutStateModel): HeightLayout {
    return state.heightLayout;
  }

  @Selector()
  static portrait(state: LayoutStateModel): boolean {
    return state.portrait;
  }

  ngxsOnInit(context: StateContext<LayoutStateModel>): void {
    if (this.breakpointObserver.isMatched([Breakpoints.HandsetPortrait])) {
      context.patchState({
        portrait: true,
      });
    }

    this.breakpointObserver
      .observe([Breakpoints.HandsetPortrait])
      .subscribe((state: BreakpointState) => {
        context.patchState({
          portrait: state.matches,
        });
      });

    if (this.breakpointObserver.isMatched(smallHeightBreakpoint)) {
      context.patchState({
        heightLayout: HeightLayout.SMALL,
      });
    }

    this.breakpointObserver
      .observe(smallHeightBreakpoint)
      .subscribe((result) => {
        context.patchState({
          heightLayout: result.matches ? HeightLayout.SMALL : HeightLayout.BIG,
        });
      });

    if (this.breakpointObserver.isMatched(xlBreakpoint)) {
      context.patchState({
        primeLayout: PrimeLayout.XL,
      });
    }
    this.breakpointObserver.observe(xlBreakpoint).subscribe((result) => {
      if (result.matches) {
        context.patchState({
          primeLayout: PrimeLayout.XL,
        });
      }
    });

    if (this.breakpointObserver.isMatched(lgBreakpoint)) {
      context.patchState({
        primeLayout: PrimeLayout.LG,
      });
    }
    this.breakpointObserver.observe(lgBreakpoint).subscribe((result) => {
      if (result.matches) {
        context.patchState({
          primeLayout: PrimeLayout.LG,
        });
      }
    });

    if (this.breakpointObserver.isMatched(mdBreakpoint)) {
      context.patchState({
        primeLayout: PrimeLayout.MD,
      });
    }
    this.breakpointObserver.observe(mdBreakpoint).subscribe((result) => {
      if (result.matches) {
        context.patchState({
          primeLayout: PrimeLayout.MD,
        });
      }
    });

    if (this.breakpointObserver.isMatched(smBreakpoint)) {
      context.patchState({
        primeLayout: PrimeLayout.SM,
      });
    }
    this.breakpointObserver.observe(smBreakpoint).subscribe((result) => {
      if (result.matches) {
        context.patchState({
          primeLayout: PrimeLayout.SM,
        });
      }
    });

    this.breakpointObserver.observe(desktopBreakpoint).subscribe((result) => {
      context.patchState({
        layout: result.matches ? Layout.TABLET : Layout.DESKTOP,
      });
    });
  }
}
