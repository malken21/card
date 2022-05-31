const url = "GASのURL";

async function button() {

    document.getElementById('result').textContent = '';


    const id = document.getElementById("id").value;
    const name = document.getElementById("name").value;


    if (!id || !name) {
        document.getElementById('result').textContent = 'ユーザーIDまたはユーザー名が記入されていません';
        return;
    }


    let data = { "type": "new", "data": [id, name, 0] }
    console.log(data)
    let response = await fetch(`${url}?data=${JSON.stringify(data)}`);
    let json = await response.json();

    console.log(json);
    if (json.status == "Ok") {
        document.getElementById('result').textContent = '登録完了';
    } else if (json.status == "ID Error") {
        document.getElementById('result').textContent = 'すでにユーザーIDが使われています';
    }
}