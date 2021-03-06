
document.addEventListener('DOMContentLoaded', function () {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = JSON.parse(xhr.responseText)
            var tableTag = document.querySelector('#product-table');
            for (let index = 0; index < data.length; index++) {
                const element = data[index];
                tableTag.innerHTML += `<tr>
            <th>${element.id}</th>
            <th>${element.name}</th>
            <th>${element.description}</th>
            <th>${element.price}</th>
            <th>
            <a href="/form.html?id=${element.id}"> <i class="fa fa-pencil-square-o"></i></a>
            <a href="/detail.html?id=${element.id}"> <i class="fa fa-info-circle"></i></a>
            <a href="javascrip:void(0)"><i class="fa fa-trash" onclick="deleteProduct(${element.id})"></i></a>
            </th>
            </tr>`;
            }
        }
    };
    xhr.open('GET', 'http://localhost:8080/api/v1/candidate', false);
    xhr.send();
})

function deleteProduct(id) {
    if (id === undefined || id === null) {
        return;
    }
    if (confirm('m chắc chưa')) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                alert('thành công!');
                window.location.href = 'index.html';
            }
        };
        xhr.open('GET', 'http://localhost:8080/api/v1/candidate', false);
        xhr.send();
    }
}
