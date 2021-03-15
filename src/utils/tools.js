// 格式化时间戳
export function dealTime(t) {
    let date = new Date(t);
    return (
        date.getFullYear() +
        "-" +
        (date.getMonth() > 8
            ? date.getMonth() + 1
            : "0" + (date.getMonth() + 1)) +
        "-" +
        (date.getDate() > 9 ? date.getDate() : "0" + date.getDate())
    );
}