export default function mergeClassName(...classNames: (string|boolean|undefined|null)[]) {
    return classNames.filter(cn => typeof cn === 'string').join(' ');
}