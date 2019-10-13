// TypeScript Version: 3.1
// Type definitions for react-interactable vo.6.4
// Project: https://github.com/arqex/react-interactable/blob/master/readme.md
// Definitions by: Yannis Spyrou <https://github.com/iannes/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../react/index.d.ts"/>
/// <reference path="../react-dom/index.d.ts"/>

declare module 'react-interactable/noNative' {
    interface InteractableView {
        snapPoints: [];
        frictionAreas: [];
        alertAreas: [];
        gravityPoints: [];
        horizontalOnly: boolean;
        verticalOnly: boolean;
        dragWithSpring: object;
        dragEnabled: boolean;
        animatedValueX: any;
        animatedValueY: any;
        onSnap: Function;
        onSnapStart: Function;
        onEnd: Function;
        onDrag: Function;
        boundaries: object;
        initialPosition: object;
        dragToss: number;
    }
    interface injectDependencies {
        InteractableView: InteractableView;
    }

    class Interactable {
        static View: any;
    }
    export = Interactable;
}
