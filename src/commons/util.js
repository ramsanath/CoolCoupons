export function safeCall(fn) {
    if (typeof fn == 'function') {
        fn();
    }
}

export function timestamp() {
    return Date.now();
}

export function snapshotToArray(snapshot) {
    const list = [];
    snapshot.forEach(
        (doc) => list.push(doc.data())
    );
    return list;
}

export function percent(p) {
    return ({
        of: function(b) {
            return (p * b) / 100;
        }
    })
}