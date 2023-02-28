### CR /users

user 회원가입 : post /users  
user 전체 목록 가져오기 : get /users

### R /articles

articles 전체 목록 확인 : get /articles

### R /pictures

pictures 전체 목록 확인 : get /pictures

### CRD /users/:user_id/articles

article 작성 : post /users/:user_id/articles  
유저의 article 목록 확인 : get /users/:user_id/articles  
유저의 article 전체 삭제 : delete /users/:user_id/articles

### UD /users/:user_id/articles/:article_id

유저의 article 선택 수정 : put /users/:user_id/articles/:article_id  
유저의 article 선택 삭제 : delete /users/:user_id/articles/:article_id

### CRD /users/:user_id/articles/:article_id/pictures

article 작성시 사진 업로드 : post /users/:user_id/articles/:article_id/pictures  
article의 사진 전체 가져오기 : get /users/:user_id/articles/:article_id/pictures  
article의 사진 전체 삭제 : delete /users/:user_id/articles/:article_id/pictures

### RUD /users/:user_id/articles/:article_id/pictures/:picture_id

article의 사진 하나 가져오기 : get /users/:user_id/articles/:article_id/pictures/:picture_id  
article의 사진 하나 수정 : put /users/:user_id/articles/:article_id/pictures/:picture_id  
article의 사진 하나 삭제 : delete /users/:user_id/articles/:article_id/pictures/:picture_id
