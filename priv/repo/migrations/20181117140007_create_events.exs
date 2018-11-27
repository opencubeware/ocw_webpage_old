defmodule OcwWebpage.Repo.Migrations.CreateEvents do
  use Ecto.Migration

  def change do
    create table(:events) do
      add(
        :event_name_fk,
        references("event_names",
          name: "event_name_fkey",
          column: :name,
          type: :string
        ),
        null: true
      )

      add(:tournament_id, references(:tournaments), null: false)
    end
  end
end
