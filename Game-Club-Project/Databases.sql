BEGIN TRANSACTION;

DROP TABLE IF EXISTS users;
DROP SEQUENCE IF EXISTS seq_user_id;

CREATE SEQUENCE seq_user_id
  INCREMENT BY 1
  NO MAXVALUE
  NO MINVALUE
  CACHE 1;


CREATE TABLE users (
	user_id int DEFAULT nextval('seq_user_id'::regclass) NOT NULL,
	username varchar(50) NOT NULL,
	password_hash varchar(200) NOT NULL,
	CONSTRAINT PK_user PRIMARY KEY (user_id)
);

INSERT INTO users (username,password_hash,role) VALUES ('user','$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC','ROLE_USER');
INSERT INTO users (username,password_hash,role) VALUES ('admin','$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC','ROLE_ADMIN');


COMMIT TRANSACTION;

BEGIN TRANSACTION;

CREATE TABLE games_collection (
        game_id serial,
        game_name varchar(50) NOT NULL,
        game_box_location int,
        
        constraint pk_game_id primary key (game_id)
 );
 
CREATE TABLE games_played (
        game_played_id serial,
        dates date,
        game_id int NOT NULL,
        game_session_id int,
        winner varchar(50),
        
        constraint pk_game_played_id primary key (game_played_id)
);
        
CREATE TABLE players (
        player_id serial,
        first_name varchar(50),
        last_name varchar(50),
        email varchar(200),
        picture_id int,
        signup_date date,
        
        constraint pk_player_id primary key (player_id)
);

CREATE TABLE game_session (
        game_session_id serial,
        player_id integer,
        score_id integer,
        stat_id integer,
        
        constraint pk_game_session_id primary key (game_session_id)
);

CREATE TABLE stats (
        stat_id serial,
        win boolean,
        lost boolean,
        player_id int,
        
        constraint pk_stat_id primary key (stat_id)
);
        
CREATE TABLE scores (
        score_id serial,
        scores int,
        game_session_id int,
        
        constraint pk_score_id primary key (score_id)
);


ALTER TABLE game_session ADD FOREIGN KEY (player_id) REFERENCES players (player_id);

ALTER TABLE games_played ADD FOREIGN KEY (game_session_id) REFERENCES game_session (game_session_id);

ALTER TABLE players 
ADD COLUMN stat_id int;
ALTER TABLE players ADD FOREIGN KEY (stat_id) REFERENCES stats (stat_id);

ALTER TABLE games_played ADD FOREIGN KEY (game_id) REFERENCES games_collection (game_id);

ALTER TABLE scores ADD FOREIGN KEY (game_session_id) REFERENCES game_session (game_session_id);