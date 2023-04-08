let yenisatır="\r\n"

let mesaj ="lütfen bir hava durumu tahmini seçiniz:"+yenisatır
+"1-fırtınalı"+yenisatır
+"2-sisli"+yenisatır
+"3-güneşli"+yenisatır
+"4-yağmurlu";
//alert(mesaj);
let hava= prompt(mesaj);
switch (hava) {
    case "3":
        alert("tişört ve yazlık elbiselerinizi giyebilirsiniz")
        break;
        case" 4":
            alert("şemsiyenizi almadan çıkmayınız")
            break;
            case"1":
                alert("bugün dışarı  mümkün oldukça çıkmamalı ve çatı önlerinden geçmemeliniz")
                break;
                case "2":
                    alert("trafikte yayalara dikkat etmelisiniz")
                   break;
                    

    default:
        alert("lütfen geçerli bir hava durumu giriniz")
        break;
}
