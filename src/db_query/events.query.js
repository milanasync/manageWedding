module.exports = {
  list: `SELECT
    id,
    name,
    details,
    gallery,
    address,
    village,
    city,
    state,
    country,
    days,
    date_of_event,
    updated_on
    FROM
    events
    WHERE
    is_deleted = false
    `,

  get: `SELECT
    id,
    name,
    details,
    gallery,
    address,
    village,
    city,
    state,
    country,
    days,
    date_of_event,
    updated_on
    FROM
    events
    WHERE
    is_deleted = false AND
    id = :id
    `,

  add: `INSERT INTO
  events(
    name,
    details,
    gallery,
    address,
    village,
    city,
    state,
    country,
    days,
    date_of_event,
    created_by,
    is_active
  )
  VALUES
  (
    :name,
    :details,
    :gallery,
    :address,
    :village,
    :city,
    :state,
    :country,
    :days,
    :date_of_event,
    :created_by,
    :is_active
  )
  `,

  update: `UPDATE
  events
  SET
    name = :name,
    details = :details,
    gallery = :gallery,
    address = :address,
    village = :village,
    city = :city,
    state = :state,
    country = :country,
    days = :days,
    date_of_event = :date_of_event,
    updated_on = CURRENT_TIMESTAMP()
  WHERE
    id = :id
  `,

  deleteE: `UPDATE
  events
  SET
    is_deleted = true,
    updated_on = CURRENT_TIMESTAMP()
  WHERE
    id = :id
  `,
};
