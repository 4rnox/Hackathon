import hashlib

userdata = {"user":"Pau",
"password":"mypasswordog"}


hash = hashlib.sha256(userdata["password"].encode('utf8')).hexdigest()
print(hash)
    # Hash de usuari i contra
    # SQLquery -- return 1 for succes, -1 for error
    # 

"""
{
    "user" : "",
    "password" : ""
}

"""