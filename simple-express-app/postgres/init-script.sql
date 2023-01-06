-- CREATE DATABASE simple_express_db WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'en_US.utf8' LC_CTYPE = 'en_US.utf8';

ALTER DATABASE simple_express_db OWNER TO david;

\connect simple_express_db

CREATE TABLE public.clients (
    id integer NOT NULL,
    name character varying(150) NOT NULL
);


ALTER TABLE public.clients OWNER TO david;

CREATE SEQUENCE public.clients_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
    
ALTER TABLE public.clients_id_seq OWNER TO david;

ALTER SEQUENCE public.clients_id_seq OWNED BY public.clients.id;
ALTER TABLE ONLY public.clients ALTER COLUMN id SET DEFAULT nextval('public.clients_id_seq'::regclass);


COPY public.clients (id, name) FROM stdin;
1	Client 1
2	Client 2
\.

SELECT pg_catalog.setval('public.clients_id_seq', 2, true);


ALTER TABLE ONLY public.clients
    ADD CONSTRAINT clients_pkey PRIMARY KEY (id);