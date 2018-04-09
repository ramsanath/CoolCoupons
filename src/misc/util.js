export function safeCall(fn) {
    if (typeof fn == 'function') {
        fn();
    }
} 