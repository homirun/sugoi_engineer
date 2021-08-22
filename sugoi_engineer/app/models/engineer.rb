require 'net/http'

class Engineer < ApplicationRecord
  validates :github_id, length: { maximum: 20 }, uniqueness: true
  validate :github_id_valid

  def to_param
    github_id
  end

  private
    def github_id_valid
      unless /\A[_0-9a-zA-Z]*\Z/.match?(github_id)
        return errors.add("英数字とアンダースコア以外の値が入力されています。")
      end
      uri = URI('https://github.com/' + github_id)
      res = Net::HTTP.get_response(uri)
      if res.code != "200"
        errors.add(github_id, " ユーザーが存在しません")
      end
    end
end
