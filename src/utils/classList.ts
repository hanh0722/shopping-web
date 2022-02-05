export const classList = (...classes: Array<string | undefined>) => {
    const mergeClasses = classes.filter(item => {
        return !!item;
    })
    return mergeClasses.join(' ');
}