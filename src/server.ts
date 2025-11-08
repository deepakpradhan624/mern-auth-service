function login(username: string): boolean | undefined {
    if (username === 'admin') {
        return true;
    }
}

login('admin');
