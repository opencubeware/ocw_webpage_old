defmodule OcwWebpage.Repo.Migrations.CreateRoundNames do
  use Ecto.Migration

  def change do
    create table(:round_names) do
      add(:name_id, :integer, null: false)
      add(:name, :string, null: false)
    end

    create(unique_index(:round_names, [:name_id]))
  end
end
