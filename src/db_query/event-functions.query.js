module.exports = {
  list: `SELECT
      id,
      event_id,
      name,
      details,
      starts,
      ends,
      access_givens,
      updated_on
      FROM
      event_functions
      WHERE
      is_deleted = false
      `,

  get: `SELECT
    id,
    event_id,
    name,
    details,
    starts,
    ends,
    access_givens,
    updated_on
    FROM
    event_functions
    WHERE
    is_deleted = false AND
    id = :id
    `,

  add: `INSERT INTO
    event_functions(
        event_id,
        name,
        details,
        starts,
        ends,
        access_givens,
        created_by,
        is_active
    )
    VALUES
    (
        :event_id,
        :name,
        :details,
        :starts,
        :ends,
        :access_givens,
        :created_by,
        :is_active
    )
    `,

  update: `UPDATE
  event_functions
    SET
       name = :name,
       details = :details,
       starts = :starts,
       ends = :ends,
       access_givens = :access_givens,
       updated_on = CURRENT_TIMESTAMP()
    WHERE
      id = :id`,

  deleteE: `UPDATE
  event_functions
    SET
      is_deleted = true,
      updated_on = CURRENT_TIMESTAMP()
    WHERE
      id = :id
    `,
};
