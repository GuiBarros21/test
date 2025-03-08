require 'csv'

def clean_price(price)
  return 0.0 if price.nil? || price.strip.empty?
  price = price.gsub(/[^0-9.]/, '').strip # Remove non-numeric characters except '.'
  price.to_f.round(2)
rescue
  0.0
end

def clean_stock(stock)
  return 0 if stock.nil? || stock.strip.empty?
  Integer(stock)
rescue ArgumentError, TypeError
  0
end

def process_products_csv(input_file, output_file)
  products = {}
  
  CSV.foreach(input_file, headers: true) do |row|
    next if products.key?(row['product_id']) # Keep only first occurrence of product_id
    
    row['price'] = clean_price(row['price']).to_s
    row['stock'] = clean_stock(row['stock']).to_s
    row['supplier_email'] = row['supplier_email'].to_s.strip.downcase
    
    products[row['product_id']] = row.to_h
  end
  
  CSV.open(output_file, 'w', write_headers: true, headers: products.values.first.keys) do |csv|
    products.values.each { |product| csv << product.values }
  end
end

# Example usage
process_products_csv('products.csv', 'cleaned_products.csv')
