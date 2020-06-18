-- dev
CREATE DATABASE billssys;
CREATE USER billssys with superuser password '123';
ALTER DATABASE billssys OWNER to billssys;
-- test
CREATE DATABASE billssystest;
CREATE USER billssystest with superuser password '123';
ALTER DATABASE billssystest OWNER to billssystest;