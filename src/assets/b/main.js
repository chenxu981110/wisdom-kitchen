const express = require('express');
var mysql = require('mysql');
const app = express();
const data = [
    { id: '0001', name: 'RFID开发' },
    { id: '0002', name: 'WSN开发' },
    { id: '0003', name: 'WSN实训' },
    { id: '0004', name: 'Web前端开发' }
];

/*app.get('/', function (req, res) {
    res.send('Hello World!');
});*/

//接入访问允许
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

    if (req.method == 'OPTIONS') {
        res.send(200); /让options请求快速返回/
    }
    else {
        next();
    }
});

app.get('/courses', function (_req, res) {
    res.send(JSON.stringify(data));
});

app.get('/user', function (_req, res) {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        port: '3306',
        database: 'meetingroom'
    });

    connection.connect();

    var sql = 'SELECT * FROM user';
    // 查询
    connection.query(sql, function (err, result) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            res.send('查询失败!');
            return;
        }

        console.log('--------------------------SELECT----------------------------');
        console.log(result);
        const users = [];
        for (let item of result) {
            users.push({
                id: item.id,
                username: item.username,
                password: item.password
            })
        }
        res.send(JSON.stringify(users));
        console.log('------------------------------------------------------------\n\n');
    });

    connection.end();
    // res.send('查询完成！');
});

app.post('/user', function (req, res) {
    /*req.on('data',function(data){
        obj=JSON.parse(data);
        console.log(obj);
        const username = obj.userName;
        const password = obj.password;
    })*/
    
    console.log(JSON.stringify(req.query));

    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        port: '3306',
        database: 'meetingroom'
    });

    connection.connect();

    var sql = "SELECT * FROM user WHERE username='" + req.query.name + "'";
    // 查询
    connection.query(sql, function (err, result) {
        console.log(sql);
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            res.header.
                res.send(JSON.stringify({
                    succ: false,
                    msg: '账号或者密码不正确！'
                }));
            return;
        }

        console.log('--------------------------SELECT----------------------------');
        console.log(result);
        if (result.length <= 0) {
            res.send(JSON.stringify({
                succ: false,
                msg: '账号或者密码不正确！'
            }));
        } else {
            for (let item of result) {
                if (item.password === req.query.password) {
                    console.log('Found it!');
                    res.send(JSON.stringify({
                        succ: true,
                        msg: 'Login success'
                    }));

                    return;
                }
            }

            res.send(JSON.stringify({
                succ: false,
                msg: '账号或者密码不正确！'
            }));
        }
        console.log('------------------------------------------------------------\n\n');
    });

    connection.end();
});


//登录
app.post('/user/:userName/:password',function(req,res){
    
    const userName = req.params["userName"];
    const password = req.params["password"];
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        port: '3306',
        database: 'meetingroom'
    });

    connection.connect();
    var sql = "SELECT * FROM user WHERE userName='" + userName + "' and password='" + password + "'";
    // 查询
    console.log(sql);
    connection.query(sql, function (err, result) {
        
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            res.header.
                res.send(JSON.stringify({
                    succ: false,
                    msg: '账号或者密码不正确！'
                }));
            return;
        }
        console.log('--------------------------SELECT----------------------------');
        console.log(result);
        if (result.length <= 0) {
            res.send(JSON.stringify({
                succ: false,
                msg: '账号或者密码不正确！'
            }));
        } else {
            for (let item of result) {
                if (item.password === password) {
                    console.log('Found it!');
                    res.send(JSON.stringify({
                        succ: true,
                        msg: 'Login success'
                    }));

                    return;
                }
            }

            res.send(JSON.stringify({
                succ: false,
                msg: '账号或者密码不正确！'
            }));
        }
        console.log('------------------------------------------------------------\n\n');
    });

    connection.end();
});



 

app.put('/device/:id/:status', function (req, res) {
    const id = req.params["id"];
    const status = req.params["status"];

    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        port: '3306',
        database: 'meetingroom'
    });

    connection.connect();

    let sql = 'UPDATE device SET status=' + status
        + ' WHERE id = \'' + id + '\'';
    console.log(sql);
    const queryCallback = function (err, result) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            res.send(JSON.stringify({
                succ: false,
                msg: '查询失败!'
            }));
            return;
        }

        const obj = {
            id: id,
            status: result[0].customer_status
        }
        res.send(JSON.stringify(obj));
    };

    const updateCallback = function (err, _result) {
        if (err) {
            console.log('[UPDATE ERROR] - ', err.message);
            res.send('修改失败!');
            return;
        }

        let sql2 = "SELECT * FROM device WHERE id='" + id + "'";
        connection.query(sql2, queryCallback);
        connection.end();
    };
    connection.query(sql, updateCallback);
});

app.get('/device', function (_req, res) {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        port: '3306',
        database: 'meetingroom'
    });

    connection.connect();
    var sql = "SELECT * FROM device";
    connection.query(sql, function (err, result) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            res.send(JSON.stringify({
                succ: false,
                msg: '查询失败!'
            }));
            return;
        }

        res.send(JSON.stringify(result));
    });
    connection.end();
});

app.post('/device/:id/:status', function (req, res) {
    // 1) 获取参数路由的参数
    const id = req.params["id"];
    const status = req.params["status"];
    console.log(status);
    // 2) 设置数据库连接
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        port: '3306',
        database: 'meetingroom'
    });

    connection.connect();

    // 3) 生成SQL语句
    var sql = "UPDATE device SET customer_status = " + status
        + " where id='" + id + "'";
    console.log(sql);

    // 4) 调用SQL语句
    let callback = function (err, _result) {
        // 5) 回调函数处理
        if (err) {
            console.log('[UPDATE ERROR] - ', err.message);
            res.send(JSON.stringify({
                succ: false,
                msg: '修改失败!'
            }));
            return;
        }

        res.send(JSON.stringify({
            succ: true,
            msg: '修改成功！'
        }));
    };

    connection.query(sql, callback);
    connection.end();
});

app.post('/device/:id', function (req, res) { 
    // 1) 获取参数路由的参数
    const id = req.params["id"];
    // 2) 设置数据库连接
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        port: '3306',
        database: 'meetingroom'
    });

    connection.connect();

    // 3) 生成SQL语句
    var sql = "INSERT INTO  VALUES('" + id
        + "', 0, 0)";

    let callback = function (err, _result) {
        // 5) 成功和失败的处理
        if (err) {
            console.log('[INSERT ERROR] - ', err.message);
            res.send(JSON.stringify({
                succ: false,
                msg: '添加失败!'
            }));
            return;
        }

        res.send(JSON.stringify({
            succ: true,
            msg: '添加成功！'
        }));
    }

    // 4) 调用SQL语句
    connection.query(sql, callback);
    connection.end();
});
























//添加设备
app.post('/adddevice/:deviceId/:deviceName', function (req, res) {

    const deviceId = req.params["deviceId"];
    const deviceName = req.params["deviceName"];
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        port: '3306',
        database: 'meetingroom'
    });

    connection.connect();
    var sql = "INSERT INTO device VALUES('" + deviceId + "','" + deviceName + "', 0, 0)";
    // 查询
    console.log(sql);

    let callback = function (err, _result) {
        // 5) 成功和失败的处理
        if (err) {
            console.log('[INSERT ERROR] - ', err.message);
            res.send(JSON.stringify({
                succ: false,
                msg: '添加失败!'
            }));
            return;
        }

        res.send(JSON.stringify({
            succ: true,
            msg: '添加成功！'
        }));
    }

    // 4) 调用SQL语句
    connection.query(sql, callback);
    connection.end();
});

//注册账户
app.post('/register/:userName/:password', function (req, res) {

    const userName = req.params["userName"];
    const password = req.params["password"];
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        port: '3306',
        database: 'meetingroom'
    });

    connection.connect();
    var sql = "INSERT INTO user VALUES('" + userName + "','" + password + "')";
    // 查询
    console.log(sql);

    let callback = function (err, _result) {
        // 5) 成功和失败的处理
        if (err) {
            console.log('[INSERT ERROR] - ', err.message);
            res.send(JSON.stringify({
                succ: false,
                msg: '注册失败!'
            }));
            return;
        }

        res.send(JSON.stringify({
            succ: true,
            msg: '注册成功！'
        }));
    }

    // 4) 调用SQL语句
    connection.query(sql, callback);
    connection.end();
});
//删除账户



//删除设备
app.post('/deldevice/:deviceId', function (req, res) {

    const deviceId = req.params["deviceId"];
    
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        port: '3306',
        database: 'meetingroom'
    });

    connection.connect();
    var sql = "delete from device where id='" + deviceId + "'";
    // 查询
    console.log(sql);

    let callback = function (err, _result) {
        // 5) 成功和失败的处理
        if (err) {
            console.log('[INSERT ERROR] - ', err.message);
            res.send(JSON.stringify({
                succ: false,
                msg: '删除失败!'
            }));
            return;
        }

        res.send(JSON.stringify({
            succ: true,
            msg: '删除成功！'
        }));
    }

    // 4) 调用SQL语句
    connection.query(sql, callback);
    connection.end();
});
//修改设备
app.post('/moddevice/:deviceId/:deviceName', function (req, res) {
    // 1) 获取参数路由的参数
    const deviceId = req.params["deviceId"];
    const deviceName = req.params["deviceName"];
    //console.log(status);
    // 2) 设置数据库连接
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        port: '3306',
        database: 'meetingroom'
    });

    connection.connect();

    // 3) 生成SQL语句
    var sql = "UPDATE device SET name = '" + deviceName
        + "' where id='" + deviceId + "'";
    console.log(sql);

    // 4) 调用SQL语句
    let callback = function (err, _result) {
        // 5) 回调函数处理
        if (err) {
            console.log('[UPDATE ERROR] - ', err.message);
            res.send(JSON.stringify({
                succ: false,
                msg: '修改失败!'
            }));
            return;
        }

        res.send(JSON.stringify({
            succ: true,
            msg: '修改成功！'
        }));
    };

    connection.query(sql, callback);
    connection.end();
});


//查询设备
app.get('/device/:deviceId', function (req, res) {

    const deviceId = req.params["deviceId"];

    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        port: '3306',
        database: 'meetingroom'
    });

    connection.connect();
    var sql = "SELECT * FROM device WHERE id='" + deviceId + "'";
    // 查询
    console.log(sql);

    let callback = function (err, _result) {
        // 5) 成功和失败的处理
        if (err) {
            console.log('[INSERT ERROR] - ', err.message);
            res.send(JSON.stringify({
                succ: false,
                msg: '查询失败!'
            }));
            return;
        }
        console.log(_result);

        res.send(JSON.stringify(_result));
    }

    // 4) 调用SQL语句
    connection.query(sql, callback);
    connection.end();
});








app.use(express.static('dist'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));











/*
app.get('/device/:id', function (req, res) {
    const id = req.params["id"];
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        port: '3306',
        database: 'meetingroom'
    });

    connection.connect();
    var sql = "SELECT * FROM device WHERE id='" + id + "'";
    connection.query(sql, function (err, result) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            res.send(JSON.stringify({
                succ: false,
                msg: '查询失败!'
            }));
            return;
        }

        const resp = {
            id: id,
            status: result[0].status,
            customer_status: result[0].customer_status
        };
        res.send(JSON.stringify(resp));
    });
    connection.end();
});
*/




/*
app.post('/quedevice/:deviceId', function (req, res) {

    const deviceId = req.params["deviceId"];

    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        port: '3306',
        database: 'meetingroom'
    });

    connection.connect();
    var sql = "SELECT * FROM device WHERE id='" + deviceId + "'";
    // 查询
    console.log(sql);

    let callback = function (err, _result) {
        // 5) 成功和失败的处理
        if (err) {
            console.log('[INSERT ERROR] - ', err.message);
            res.send(JSON.stringify({
                succ: false,
                msg: '查询失败!'
            }));
            return;
        }
        console.log(_result);

        res.send(JSON.stringify({
            succ: true,
            msg: '查询成功！',
            object: _result
        }));
    }

    // 4) 调用SQL语句
    connection.query(sql, callback);
    connection.end();
});*/



//向指定的资源提交要被处理的数据POST
//从指定的资源请求数据。GET
