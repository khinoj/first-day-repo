

-- put id and name varibale inside biographies
INSERT INTO biographies (id, name)
VALUES
-- inserts id 001,002, 003 and name " ";
    ( 001, "Diary of Anne Frank"),
    ( 002, "Frida: A Biography of Frida Kahlo"),
    ( 003, "Long Walk to Freedom");

--shows all the newly added information
SELECT * FROM biographies;
