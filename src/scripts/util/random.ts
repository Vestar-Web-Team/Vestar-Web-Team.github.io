export default function random(min: number=0, max: number=1, floating: boolean=true): number {
    const res = Math.random() * (max - min) + min;
    return floating ? res : Math.round(res);
}