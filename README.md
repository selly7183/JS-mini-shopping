# Mini shopping
### Site : https://selly7183.github.io/JS-mini-shopping/
![mini-shopping](https://user-images.githubusercontent.com/88068412/211608194-ea39822b-9465-461f-92c7-9c81a1a80b85.png)

1. data/data.json 파일에 items 배열에 type, gender, size, color, image 정보를 넣어서 여러개 만들어줌.
2. loadItems() 함수를 동적으로 fetch api를 이용하여 json파일을 불러옴.
3. displayItems()함수를 호출하여 함수안에서 container에 innerHTML을 업데이트함.
4. 업데이트는 받아온 items의 object를 map을 이용해서 li 문자열 배열로 변환한 다음에 join을 통해 하나의 문자열로 만들어서 innerHTML에 추가함.
5. setEventListeners() 함수를 통해 button handling event를 시켜줌.
6. logo를 누르면 displayItems(items)가 호출되게 해줌. (전체 리스트 보여줌)
7. buttons는 이벤트 위임을 사용하여 각각의 요소에 이벤트 핸들링을 하는 것이 아니라 buttons에 이벤트를 할당해서 하나로 전체를 핸들링 할 수 있게 만듬.
8. custom-property를 이용해서 data type과 value를 통해 filtering 할 수 있게 설정해줌.
9. key와 value 값이 null 일때 return 해줌. (클릭했을때 undefined 나오는걸 해결)
10. filter를 통해서 item에 해당하는 key와 value값이 같을 때만 filter되도록 해주고,
11. updateItems()함수를 통해서 items를 forEach로 각각 눌렀을때 key와 value가 같다면 invisible로 remove, add 해줌.
