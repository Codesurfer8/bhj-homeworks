const requestUrl = `https://students.netoservices.ru/nestjs-backend/slow-get-courses`;
const xhr = new XMLHttpRequest();
xhr.open(`get`, requestUrl);
xhr.responseType = `json`
xhr.send();
