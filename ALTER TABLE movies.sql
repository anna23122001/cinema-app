ALTER TABLE directors
ADD CONSTRAINT national_fkey 
FOREIGN KEY (national_id) 
REFERENCES nationalities(national_id) 
ON DELETE CASCADE ON UPDATE CASCADE

-- ALTER TABLE directors
-- DROP CONSTRAINT national_fkey 