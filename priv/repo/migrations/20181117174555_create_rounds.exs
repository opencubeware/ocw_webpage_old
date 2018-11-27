defmodule OcwWebpage.Repo.Migrations.CreateRounds do
  use Ecto.Migration

  def change do
    create table(:rounds) do
      add(
        :round_name_fk,
        references("round_names",
          name: "round_name_fkey",
          column: :name,
          type: :string
        ),
        null: true
      )

      add(:event_id, references(:events), null: false)
    end
  end
end
