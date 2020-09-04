function validate(p) {
    return /....../.test(p)
        && /[a-z]/.test(p)
        && /[A-Z]/.test(p)
        && /[0-9]/.test(p)
        && /^[a-zA-Z0-9]+$/.test(p)
    ;
}
