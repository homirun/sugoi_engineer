class CreateEngineers < ActiveRecord::Migration[6.1]
  def change
    create_table :engineers do |t|
      t.string :github_id

      t.timestamps
    end
  end
end
