var products = [
    {
        name: 'Bị Đuổi Khỏi Nhóm Anh Hùng Tôi Muốn Sống Tự Do Tự Tại Ở Vương Đô',
        price: 59,
        rate: 5,
        description: 'Do năng lực “Nghịch đảo” nên sức mạnh của Flum thậm chí còn không bằng một người bình thường.',
        imageUrl: 'https://storage.googleapis.com/neshtech-1b9aa.appspot.com/book2.jpg?GoogleAccessId=firebase-adminsdk-rd7cc%40neshtech-1b9aa.iam.gserviceaccount.com&Expires=1687550964&Signature=Q3ihOB%2FD9PDMnlrmw%2BHSdv9iaXEyj%2FoyoCL%2BTnUYGKyJNIuDYMkagW9l8PFNynwsEonHcOyV%2BRUgX4MloTX%2FztG%2Bz0R4u%2BTI8nW%2BcQky%2BFRamFkAaOJJGYrLQDn%2FGzFaHEvnhqt8Wyvi5Qfq3mEhmSVxaYKQOYpjzTVjZH6934kYz31fECH2edZjvH4kHnGNEBfGwLXWEqubWB0D1VE1D1%2B8CWobQJjDX5hXx%2FXAVC%2BxR0Xu5KEqI3LFH73pLB2xX5HL32eGwU9FNRI3%2FoxneKylHs93Kyc8Ew9Lmzx6Q%2BvLpnaVNdOy7EEPTvMWFkGn6iOCwGLFAccULB3JcTM6mg%3D%3D',
        author: 'Sunao Minaka'
    },
    {
        name: 'Con Đường Chuyển Hóa (Tái Bản 2021)',
        price: 69,
        rate: 4,
        description: 'Kinh Bốn Lĩnh Vực Quán Niệm và kinh Quán Niệm Hơi Thở là hai kinh gối đầu giường của các vị khuất sĩ thời Bụt còn tại thế và là nền tảng của nếp sống thiền tập đạo Bụt.',
        imageUrl: 'https://storage.googleapis.com/neshtech-1b9aa.appspot.com/book1.jpg?GoogleAccessId=firebase-adminsdk-rd7cc%40neshtech-1b9aa.iam.gserviceaccount.com&Expires=1687551507&Signature=Bd37RpRwb1WaNHMfonqIZmjvmjdzEBXn94z4JNVvLD%2BfFJI39m%2FU7Ve8HDMnkjuZ4P8PikoY8UEKpL60GxfDwWgvLvZFgRXzJezW0dOdDNCAkR1XdU9LG%2FI1IqQbp8VH9dt5UQjohMR0I%2FZKgCyvJc9xpDgrHMyTVwzeJgF5Y4L%2FzFEEMU5TByWadBp0YuXMbX5hD%2F1uKRN%2BQNrng3qmYaIdVsqkxbz%2BN1w2Ohy3%2FCsV%2FHpSdnmrW37XDbaLT28boFlkMWtf%2Bbs6Wd2TTqJ1NXACdMJ0x5ZIT%2FP6xs1LQmMGdZ3yxnSd5fVQrCRi6kBPUUUYluzPJK8JYf00dNpLsw%3D%3D',
        author: 'Thích Nhất Hạnh'
    },
    {
        name: 'Cơ Duyên Của Cáo - Tặng Kèm Postcard',
        price: 39,
        rate: 4,
        description: 'Một ngày nọ, chú cáo cô độc Kokonoe vô tình nhặt được một bé chim non bị rơi khỏi tổ. Do vừa mới ăn no nên cáo quyết định mang bé chim về nhà làm thức ăn dự trữ. Nhưng oái oăm thay, cuối cùng Kokonoe lại chẳng nỡ xuống tay với bé, thậm chí còn đặt tên cho bé là Yosuga rồi nuôi dưỡng như con của mình.',
        imageUrl: 'https://storage.googleapis.com/neshtech-1b9aa.appspot.com/book3.jpg?GoogleAccessId=firebase-adminsdk-rd7cc%40neshtech-1b9aa.iam.gserviceaccount.com&Expires=1687551815&Signature=bTHwe8onw82tKaY2f3ucZpII4cP%2FjUrkja9fmwrRNjiLfNtydTaAYoV99Fk%2FG1QkOUM%2F96kRi3RV6wSsx1JtvBBoIKoLDZdO%2FCrXtvnRzhbU8qvwmVURA9dMmhTnhdTjXVDoI9iFemX0Ajwpph3bGO1%2FLOWjxx%2Bu5gBw6GJ7iGA4EOAP4EUzZR2ZOVPIsvJNb8HiexyDELbiWUYWg7WWRz9Ujsk0jMPW%2BUUGhG81pe%2Bx9aBEEPt0ZG93rfjUnllcxldUDLWHUrSO%2Fs4RWeg%2Fz77PjDoXWZOx08mIpqAUCKL1b%2FKJoaYPbunxZdYGuAQGaXJdRmuhiuKiTmM9Qyi77Q%3D%3D',
        author: 'Minazuki Akira'
    },
    {
        name: 'Kiếp Người',
        price: 79,
        rate: 5,
        description: 'Kiếp Người được chia làm 5 phần: Tuổi thơ - Những người khốn khổ - Văn sĩ - Kiếp cầm ca - Khí phách anh hùng - Những kẻ chán chường',
        imageUrl: 'https://storage.googleapis.com/neshtech-1b9aa.appspot.com/book6.jpg?GoogleAccessId=firebase-adminsdk-rd7cc%40neshtech-1b9aa.iam.gserviceaccount.com&Expires=1687552157&Signature=cFzz6k4g1U0UyRwuL9wFhHo21VmzjQraG%2BklGkeg%2B0bJbwvBZ8rC0pbQp0sqwG5IvZZ%2BsSzNg0H9sS47ulcm4kJg5JWRGDi7Rda8MgmIBVKJ42K4pDuDSLTHpguLBb3%2F1MOEBLtE2bDUYt3WiCDIxMg%2BTn8ew6Bgt%2Br3Jlqq8UZ4fGcxdW0YQm%2Bh2kQGxt3aE0IfWjWBEcTiwYceAdxZ5G3KZ5RG6CSz643ntvVeBzD6G9KC91xscrLkChb3eEI7P4%2BmfSJZt6ZsoWqrCGuwmuWkKtI6%2FJMIj%2FgCmSskxmueeGE%2FysRYUlJ20ySNtbsmHrvB6Mjg9nB40eg8KURJkg%3D%3D',
        author: 'Ngọc Giao'
    },
    {
        name: 'Thế Giới Hoàn Mỹ - Perfect World',
        price: 31,
        rate: 4,
        description: 'Câu chuyện tình đầy tính nhân văn giữa anh kiến trúc sư khuyết tật và cô họa sĩ thiết kế trẻ.',
        imageUrl: 'https://storage.googleapis.com/neshtech-1b9aa.appspot.com/book8.jpg?GoogleAccessId=firebase-adminsdk-rd7cc%40neshtech-1b9aa.iam.gserviceaccount.com&Expires=1687552293&Signature=hseyGfSpcL2alqNzzpY5hKSEn0yR0gd81KBn0p7%2BPqAIvc8FOf2md9LKNVb7RTs9yEJJRgcK9D5mcSQpKg6ciUS1HmiS6norYiUuNJqzxRucaKcrNHyFX7nEk9UGWAX3o%2BT0t%2FpIn8dJldAIoo5YkUP1vWHnMvh6Ishz1P02JywbGzpCIPCEG8LllbmdTLcH2DJrdVkN5RbKi0SQeAGM98VdR8Bwh8niEtq3Hs6HGHbYI4cTyl%2B%2BfLfFSNQtjflj07Zv2y8wENv7oSt7BvuWm0wR91QA5mp%2BPo3fbLkD9KVsU5RD%2FNKYSU5PGSfZcj8H%2FXzGjEspa0Qg0QBIQRRQjQ%3D%3D',
        author: 'Rie Aruga'
    },
    {
        name: 'Bạn Chính Là Kho Báu Của Bản Thân',
        price: 125,
        rate: 5,
        description: 'Những sắp đặt của cuộc đời khiến đôi khi chúng ta cảm thấy thật thất vọng và bất lực trước hiện thực. Đối mặt với bộn bề cuộc sống chỉ ước bản thân có thể mạnh mẽ, trở nên xinh đẹp và giỏi giang hơn để những thiệt thòi đừng làm tủi hổ',
        imageUrl: 'https://storage.googleapis.com/neshtech-1b9aa.appspot.com/book9.jpg?GoogleAccessId=firebase-adminsdk-rd7cc%40neshtech-1b9aa.iam.gserviceaccount.com&Expires=1687552402&Signature=m7L4n%2B7ZFQEMp9FjvbYVdZFKzQBRNoVtDAorS3BlhH%2FQbQJ0kax6F2kcQm%2BU%2BGoYOhu7WTTEbewFa7ad%2Btxhixi6pSeY77985YqjPHq35ZLbfBi54PSicgTJDxon4ptA18IgDcGEiltDS1bJym1qycrdG2EoU520b4FrF3kUGfyCiXISmYcR4MfXuRZ6HgO2rcPTPrh0%2F6qNIBpDeAa6bsT9XeWdQzVUxbM3ml6ccvJjGWh284cTxEHtjhhyXjvKjIS5mlszhVXyZZvbyESwVOCeLT3xyTbuhYVhFIel7ZViVL9wreDqQDEZzlYZvgDTUZyewWLjGcQGu26hMtKZOw%3D%3D',
        author: 'Kính Tịnh'
    },
    {
        name: 'Sư Tử Sóng Đôi - Bản Đặc Biệt - Tặng Kèm Clear Bookmark + Postcard',
        price: 76,
        rate: 5,
        description: 'Shishido Junpei vốn là người rất thân thiện và phóng khoáng, nhưng ngày đầu tiên bước chân vào cổng trường đại học, cậu đã gặp ngay Onizuka Leo, một anh chàng có vẻ ngoài lạnh lùng nhưng chẳng hiểu sao lại rất quen mặt.',
        imageUrl: 'https://storage.googleapis.com/neshtech-1b9aa.appspot.com/book10.jpg?GoogleAccessId=firebase-adminsdk-rd7cc%40neshtech-1b9aa.iam.gserviceaccount.com&Expires=1687552492&Signature=jCZuHkqnnZB0sAg6XctP4zQoVW%2BwdvlY0DxxZt93Qk%2F%2B5ZErMLZToI%2Ftsyl6ik3kzeS28MJFNBSt7h5WNmQXfSW6VhWsKAJbl4uMTy3f4xV3beUyXAxe6%2FAagCyWlvwIA%2F4n4vxH1xq%2BRg4P8ibnY%2B1asq1OIlLazKJKFOvOnb%2Fq%2BGd%2Fu%2BgiF3i2%2FTeWjYjVuP%2BEteclyZQjVxTd5jeXVXXB7c69EVh3ysjNdcoIKTTfI2tBtO5r1ifPlmFbAui36GLS%2BLFIimZ2TNotwH55k8W66H8WdvszTDal%2FEadPpEPay5cmRrD0%2BIDzzvTGqJ3lZL7s6FwAHx7P2zHmbv5QA%3D%3D',
        author: 'Furuya Nagisa'
    },
    {
        name: 'Văn Phòng Thám Tử Quái Vật',
        price: 27,
        rate: 4,
        description: 'Ở một vùng quê yên tĩnh nọ bỗng xảy ra sự kiện gia súc chết hàng loạt rất quái lạ. Dân làng thuê vị thám tử tâm linh Inugami từ Tokyo về để điều tra vụ việc.',
        imageUrl: 'https://storage.googleapis.com/neshtech-1b9aa.appspot.com/book11.jpg?GoogleAccessId=firebase-adminsdk-rd7cc%40neshtech-1b9aa.iam.gserviceaccount.com&Expires=1687552654&Signature=p2LsG1moAzZA84IpBr453KRdcWMbRo%2BmavRUd94RF2TnDHY%2FvX9L0d9PGOLA%2B9HnSKIXqe56%2Bpja0Rw3mfZCtsvw7bchNGtT1WaKgVOL987J9Cs08Ur6s8z1LM%2FwZVqaQi4%2BRcPjnYYlHuKHOLiFzicufewkVzJHUUYhAq2BcEc9dMlAkOljkodN%2FLhyiWIkILDGW99oDJAzJOZEGyp%2FLkb9DVQPTiW%2BZpLt%2BiJ1h6YjvZfNDfaYA8Ap4ne3l7diuHtE8gX3pvE3giAGpqETs%2FA%2B1ZcHpwSri1vJI0%2BtU3IOZ2HfXS89x%2FsO9eEK83lCIF9BCVw7kUwVtT4sCTc0nw%3D%3D',
        author: 'Sho Aimoto'
    },
];

var productList = document.getElementById("product-list");

for (var i = 0; i < products.length; i++) {
    var product = products[i];
    var productDiv = document.createElement("div");
    productDiv.classList.add("product");
    var imageUrl = document.createElement("img");
    imageUrl.src = product.imageUrl;
    productDiv.appendChild(imageUrl);
    var name = document.createElement("h3");
    name.textContent = product.name;
    productDiv.appendChild(name);
    var rate = document.createElement("span");
    rate.classList.add("rating");
    rate.textContent = product.rate + " stars";
    productDiv.appendChild(rate);
    var price = document.createElement("span");
    price.classList.add("price");
    price.textContent = "$" + product.price;
    productDiv.appendChild(price);
    productList.appendChild(productDiv);
}


