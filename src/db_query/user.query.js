module.exports = {
  list: `SELECT
    id,
    name,
    mobile,
    address,
    village,
    city,	
    state,	
    country,	
    role_type,	
    last_active_on
    FROM
    users
    WHERE
    is_deleted = false
    `,

  get: `SELECT
    id,
    name,
    mobile,
    address,
    village,
    city,	
    state,	
    country,	
    role_type,	
    last_active_on
    FROM
    users
    WHERE
    is_deleted = false AND
    id = :id
    `,

  mobileQ: `SELECT 
  id
  FROM
  users
  WHERE
  is_deleted = false AND
  mobile = :mobile
  `,
  add: `INSERT INTO
    users(
        name,	
        mobile,
        otp,	
        address,	
        village,	
        city,	
        state,
        country,
        role_type,
        created_by,	
        is_active        
    )
    VALUES
    (
        :name,	
        :mobile,
        :otp,	
        :address,	
        :village,	
        :city,	
        :state,
        :country,
        :role_type,
        :created_by,	
        :is_active
    )
    `,

  update: `UPDATE
    users
    SET
    name = :name,	
    mobile = :mobile,
    address = :address,	
    village = :village,	
    city = :city,	
    state = :state,
    country = :country,
    updated_on = CURRENT_TIMESTAMP()
    WHERE
      id = :id
    `,

  deleteE: `UPDATE
    users 
    SET
      is_deleted = true,
      updated_on = CURRENT_TIMESTAMP()
    WHERE
      id = :id
    `,
};
