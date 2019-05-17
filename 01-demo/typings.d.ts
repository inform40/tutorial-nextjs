/**
 * this file is here to avoid the need to compile twice after using a new .css file in the project.
 * For further information see http://stackoverflow.com/questions/41336858/ddg#44228423
 * or the bug in the css-loader https://github.com/Jimdo/typings-for-css-modules-loader/issues/33
 */
declare module '*.css' {
    interface IClassNames {
        [className: string]: string;
    }

    const classNames: IClassNames;
    export = classNames;
}