defmodule OcwWebpage.Repo.Migrations.CreateRounds do
  use Ecto.Migration

  def change do
    create table(:rounds) do
      add(
        :round_name_id,
        references("round_names",
          name: "round_round_name_name_id_fkey",
          column: :name_id,
          type: :integer
        ),
        null: true
      )
    end
  end
end
