/** @description 用于保证值在范围内 */
export default function range(value: number, min: number=0, max: number=0) {
    return Math.min(Math.max(value, min), max);
}