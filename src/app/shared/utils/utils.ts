export function sortObjectsByName (objectList: any[]) {
    return objectList.sort((objectA, objectB) => {
        if (objectA.name > objectB.name) {
            return 1;
        }
        if (objectA.name < objectB.name) {
            return -1;
        }
        return 0;
    })
}

export function parseISOString(dateString: string) {
    let b = dateString.split(/\D+/);
    let year: number = +b[0];
    let month: number = +b[1];
    let day: number = +b[2];
    let hours: number = +b[3];
    let minutes: number = +b[4];
    let seconds: number = +b[5];
    return new Date(Date.UTC(year, --month, day, hours, minutes, seconds, 0));
}