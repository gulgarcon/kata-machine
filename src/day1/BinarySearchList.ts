export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0;
    let hi = haystack.length;

    while (lo < hi) {
        let mid = Math.floor(lo + (hi - lo )/2)
        if (needle == haystack[mid]) {
            return true;
        } else if (needle > haystack[mid]) {
            lo = mid + 1;
        } else {
            hi = mid;
        }
    } 
    return false;
}