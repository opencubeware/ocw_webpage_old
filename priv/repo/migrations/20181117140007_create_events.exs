defmodule OcwWebpage.Repo.Migrations.CreateEvents do
  use Ecto.Migration

  def change do
    create table(:events) do
      add(
        :event_name_id,
        references("event_names",
          name: "event_event_name_name_id_fkey",
          column: :name_id,
          type: :integer
        ),
        null: true
      )
    end
  end
end
