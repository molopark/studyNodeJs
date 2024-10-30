// 현재 날짜와 시간을 가져오는 함수
function displayCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // 월은 0부터 시작하므로 1을 더해줍니다.
    const day = now.getDate();
    const hours = now.getHours();
    const minutes = ('0' + now.getMinutes()).slice(-2);
    const seconds = ('0' + now.getSeconds()).slice(-2);

    // 날짜와 시간을 문자열로 포맷팅
    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    console.log(formattedDate);
}

// 함수 호출
displayCurrentDate();

let today = new Date();
console.log(today);
let toDate = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
console.log(toDate);
