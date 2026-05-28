/* ============================================================================
   QUESTION BANK
   ----------------------------------------------------------------------------
   75 word-problem questions: 25 Basic, 25 Intermediate, 25 Advanced.
   Topics: Fractions, Decimals, Ratios, Percentages.

   HOW TO ADD MORE QUESTIONS (easy!):
   Copy one block below and change the fields. Add it anywhere in the array.

   {
     id:      'A-PE-9',          // any unique label. (level-topic-number is tidy)
     topic:   'Percentages',     // Fractions | Decimals | Ratios | Percentages
     level:   'Advanced',        // Basic | Intermediate | Advanced
     question:'... the word problem ...',
     hint:    'a nudge, not the answer',
     type:    'number',          // number | money | percent | ratio | text
     accept:  ['100', '£100'],   // every form that should count as CORRECT
     partial: [                  // OPTIONAL: common near-misses -> "partially correct"
       { value: '96', note: 'why this is a tempting trap and how to fix it' }
     ],
     model:   'Full worked solution as HTML. End with <p class="final">Answer: …</p>'
   }

   NOTES ON CHECKING (handled automatically in js/app.js):
   - Equivalent forms already match: 1/2 = 0.5 = 50% (for percent type),
     3:2 = 6:4 (ratios are simplified), "£12", "12", "12.00" all match.
   - So you usually only need ONE form in `accept`; extra forms are just insurance.
   ========================================================================== */

const QUESTIONS = [

  /* ======================= BASIC (25) ======================= */

  /* --- Fractions --- */
  { id:'B-FR-1', topic:'Fractions', level:'Basic', type:'fraction',
    question:'A pizza is cut into 8 equal slices. Tom eats 3 slices. What fraction of the pizza did he eat?',
    hint:'Fraction = (parts you have) ÷ (total parts). How many slices in the whole pizza?',
    accept:['3/8','0.375'],
    model:'<p>The whole pizza is 8 slices, so 8 is the bottom (denominator). Tom ate 3 of them, so 3 is the top (numerator).</p><p class="final">Answer: 3/8</p>' },

  { id:'B-FR-2', topic:'Fractions', level:'Basic', type:'fraction', requireSimplest:true,
    question:'In a class of 30, 12 are boys. What fraction are boys? Give your answer in its simplest form.',
    hint:'Write 12 out of 30 first, then divide top and bottom by the same number.',
    accept:['2/5','0.4'],
    model:'<ol><li>Boys out of total: 12/30.</li><li>Divide top and bottom by 6: 12÷6 = 2, 30÷6 = 5.</li></ol><p class="final">Answer: 2/5</p>' },

  { id:'B-FR-3', topic:'Fractions', level:'Basic', type:'fraction',
    question:'What is 1/2 + 1/4?',
    hint:'Make the bottoms the same first. 1/2 is the same as 2/4.',
    accept:['3/4','0.75'],
    model:'<ol><li>1/2 = 2/4.</li><li>2/4 + 1/4 = 3/4.</li></ol><p class="final">Answer: 3/4</p>' },

  { id:'B-FR-4', topic:'Fractions', level:'Basic', type:'fraction',
    question:'Sarah has 3/4 of a chocolate bar and gives 1/4 of the whole bar away. How much does she have left?',
    hint:'The bottoms are already the same, so just subtract the tops.',
    accept:['1/2','0.5','2/4'],
    model:'<p>3/4 − 1/4 = 2/4 = 1/2.</p><p class="final">Answer: 1/2</p>' },

  { id:'B-FR-5', topic:'Fractions', level:'Basic', type:'text',
    question:'Which is bigger, 2/5 or 1/2? Write the bigger fraction.',
    hint:'Turn both into the same bottom number (tenths), or into decimals.',
    accept:['1/2','0.5'],
    model:'<p>2/5 = 4/10 = 0.4, and 1/2 = 5/10 = 0.5. Since 0.5 &gt; 0.4:</p><p class="final">Answer: 1/2 is bigger</p>' },

  { id:'B-FR-6', topic:'Fractions', level:'Basic', type:'fraction',
    question:'A recipe needs 2/3 of a cup of sugar. You make HALF the recipe. How much sugar do you need?',
    hint:'"Half of" means multiply by 1/2. Half of 2/3 …',
    accept:['1/3'],
    model:'<p>Half of 2/3 = 1/2 × 2/3 = 2/6 = 1/3.</p><p class="final">Answer: 1/3 of a cup</p>' },

  /* --- Decimals --- */
  { id:'B-DE-1', topic:'Decimals', level:'Basic', type:'fraction', requireSimplest:true,
    question:'Write 0.6 as a fraction in its simplest form.',
    hint:'0.6 means 6 tenths = 6/10. Now simplify.',
    accept:['3/5','0.6'],
    model:'<p>0.6 = 6/10. Divide top and bottom by 2: 3/5.</p><p class="final">Answer: 3/5</p>' },

  { id:'B-DE-2', topic:'Decimals', level:'Basic', type:'number',
    question:'What is 0.7 + 0.45?',
    hint:'Line up the decimal points. Think of 0.7 as 0.70.',
    accept:['1.15'],
    model:'<p>0.70 + 0.45 = 1.15.</p><p class="final">Answer: 1.15</p>' },

  { id:'B-DE-3', topic:'Decimals', level:'Basic', type:'money',
    question:'A pen costs £1.20. How much do 3 pens cost?',
    hint:'Multiply the price by 3.',
    accept:['3.60','3.6'],
    model:'<p>£1.20 × 3 = £3.60.</p><p class="final">Answer: £3.60</p>' },

  { id:'B-DE-4', topic:'Decimals', level:'Basic', type:'number',
    question:'Round 4.67 to one decimal place.',
    hint:'Look at the second decimal (7). Is it 5 or more?',
    accept:['4.7'],
    model:'<p>The digit after the first decimal place is 7, which rounds up.</p><p class="final">Answer: 4.7</p>' },

  { id:'B-DE-5', topic:'Decimals', level:'Basic', type:'fraction', requireSimplest:true,
    question:'Write 0.25 as a fraction in its simplest form.',
    hint:'0.25 means 25 hundredths = 25/100.',
    accept:['1/4','0.25'],
    model:'<p>0.25 = 25/100 = 1/4.</p><p class="final">Answer: 1/4</p>' },

  { id:'B-DE-6', topic:'Decimals', level:'Basic', type:'number',
    question:'Of these three numbers, which is the SMALLEST: 0.3, 0.03, 0.33?',
    hint:'Give them all the same number of decimal places: 0.30, 0.03, 0.33.',
    accept:['0.03'],
    model:'<p>0.30, 0.03, 0.33 — the smallest is 0.03.</p><p class="final">Answer: 0.03</p>' },

  /* --- Ratios --- */
  { id:'B-RA-1', topic:'Ratios', level:'Basic', type:'ratio',
    question:'Simplify the ratio 4:8.',
    hint:'Divide both sides by the same number.',
    accept:['1:2'],
    model:'<p>Divide both numbers by 4: 4÷4 = 1, 8÷4 = 2.</p><p class="final">Answer: 1:2</p>' },

  { id:'B-RA-2', topic:'Ratios', level:'Basic', type:'number',
    question:'Paint is mixed blue:yellow = 2:3. If you use 2 tins of blue, how many tins of yellow do you need?',
    hint:'The ratio already tells you directly.',
    accept:['3'],
    model:'<p>The ratio 2:3 means 2 blue go with 3 yellow.</p><p class="final">Answer: 3 tins of yellow</p>' },

  { id:'B-RA-3', topic:'Ratios', level:'Basic', type:'number',
    question:'10 sweets are shared between two children in the ratio 1:1. How many does each child get?',
    hint:'1:1 means equal shares.',
    accept:['5'],
    model:'<p>1:1 is an equal split, so 10 ÷ 2 = 5 each.</p><p class="final">Answer: 5 sweets each</p>' },

  { id:'B-RA-4', topic:'Ratios', level:'Basic', type:'number',
    question:'A fruit bowl has apples to oranges in the ratio 3:2. If there are 3 apples, how many oranges are there?',
    hint:'Compare directly with the ratio.',
    accept:['2'],
    model:'<p>3:2 means 3 apples go with 2 oranges.</p><p class="final">Answer: 2 oranges</p>' },

  { id:'B-RA-5', topic:'Ratios', level:'Basic', type:'ratio',
    question:'Write the ratio 6:9 in its simplest form.',
    hint:'What number divides into both 6 and 9?',
    accept:['2:3'],
    model:'<p>Divide both by 3: 6÷3 = 2, 9÷3 = 3.</p><p class="final">Answer: 2:3</p>' },

  { id:'B-RA-6', topic:'Ratios', level:'Basic', type:'ratio',
    question:'There are 2 teachers for every 30 students. Write the ratio of teachers to students in its simplest form.',
    hint:'Start with 2:30, then divide both by 2.',
    accept:['1:15'],
    model:'<p>2:30, divide both by 2 → 1:15.</p><p class="final">Answer: 1:15</p>' },

  /* --- Percentages --- */
  { id:'B-PE-1', topic:'Percentages', level:'Basic', type:'number',
    question:'What is 10% of 50?',
    hint:'10% means "divide by 10".',
    accept:['5'],
    model:'<p>10% of 50 = 50 ÷ 10 = 5.</p><p class="final">Answer: 5</p>' },

  { id:'B-PE-2', topic:'Percentages', level:'Basic', type:'number',
    question:'What is 50% of 80?',
    hint:'50% means "half".',
    accept:['40'],
    model:'<p>Half of 80 = 40.</p><p class="final">Answer: 40</p>' },

  { id:'B-PE-3', topic:'Percentages', level:'Basic', type:'number',
    question:'What is 25% of 40?',
    hint:'25% means "a quarter".',
    accept:['10'],
    model:'<p>A quarter of 40 = 40 ÷ 4 = 10.</p><p class="final">Answer: 10</p>' },

  { id:'B-PE-4', topic:'Percentages', level:'Basic', type:'percent',
    question:'Write 1/2 as a percentage.',
    hint:'Out of 100, how much is one half?',
    accept:['50','50%'],
    model:'<p>1/2 = 50/100 = 50%.</p><p class="final">Answer: 50%</p>' },

  { id:'B-PE-5', topic:'Percentages', level:'Basic', type:'number',
    question:'What is 20% of 200?',
    hint:'10% of 200 is 20, so 20% is double that.',
    accept:['40'],
    model:'<p>10% of 200 = 20, so 20% = 40.</p><p class="final">Answer: 40</p>' },

  { id:'B-PE-6', topic:'Percentages', level:'Basic', type:'percent',
    question:'A test is out of 20 marks. You score 15. What percentage did you get?',
    hint:'Score ÷ total, then × 100. Or: each mark is worth 5%.',
    accept:['75','75%'],
    model:'<p>15/20 = 0.75 = 75%. (Each mark is 100÷20 = 5%, and 15 × 5% = 75%.)</p><p class="final">Answer: 75%</p>' },

  { id:'B-PE-7', topic:'Percentages', level:'Basic', type:'percent',
    question:'Write 0.3 as a percentage.',
    hint:'To turn a decimal into a percentage, multiply by 100.',
    accept:['30','30%'],
    model:'<p>0.3 × 100 = 30%.</p><p class="final">Answer: 30%</p>' },

  /* ===================== INTERMEDIATE (25) ===================== */

  /* --- Fractions --- */
  { id:'I-FR-1', topic:'Fractions', level:'Intermediate', type:'fraction',
    question:'A jug holds 3/4 of a litre of juice. You pour out 2/3 of what is in the jug. How many litres did you pour out?',
    hint:'"2/3 of 3/4" means multiply the two fractions.',
    accept:['1/2','0.5'],
    model:'<p>2/3 × 3/4 = 6/12 = 1/2.</p><p class="final">Answer: 1/2 litre</p>' },

  { id:'I-FR-2', topic:'Fractions', level:'Intermediate', type:'number',
    question:'2/5 of a class of 35 walk to school. How many children walk to school?',
    hint:'Find 1/5 first (35 ÷ 5), then double it.',
    accept:['14'],
    model:'<ol><li>1/5 of 35 = 7.</li><li>2/5 = 2 × 7 = 14.</li></ol><p class="final">Answer: 14 children</p>' },

  { id:'I-FR-3', topic:'Fractions', level:'Intermediate', type:'fraction',
    question:'Liam reads 1/3 of his book on Monday and 1/4 of it on Tuesday. What fraction of the book has he read in total?',
    hint:'Common denominator of 3 and 4 is 12.',
    accept:['7/12'],
    model:'<p>1/3 = 4/12 and 1/4 = 3/12. Total = 4/12 + 3/12 = 7/12.</p><p class="final">Answer: 7/12</p>' },

  { id:'I-FR-4', topic:'Fractions', level:'Intermediate', type:'number',
    question:'A ribbon is 5/6 of a metre long. It is cut into pieces each 1/6 of a metre. How many pieces are there?',
    hint:'How many sixths are in 5/6?',
    accept:['5'],
    model:'<p>(5/6) ÷ (1/6) = 5.</p><p class="final">Answer: 5 pieces</p>' },

  { id:'I-FR-5', topic:'Fractions', level:'Intermediate', type:'number',
    question:'3/4 of a number is 18. What is the number?',
    hint:'Work backwards. If 3/4 is 18, what is 1/4?',
    accept:['24'],
    model:'<ol><li>3/4 = 18, so 1/4 = 18 ÷ 3 = 6.</li><li>The whole (4/4) = 6 × 4 = 24.</li></ol><p class="final">Answer: 24</p>' },

  { id:'I-FR-6', topic:'Fractions', level:'Intermediate', type:'number',
    question:'There are 24 cupcakes. 5/8 of them have icing. How many do NOT have icing?',
    hint:'The ones without icing are 3/8 of the cupcakes.',
    accept:['9'],
    partial:[{value:'15', note:'That is how many DO have icing. The question asks for the ones WITHOUT icing.'}],
    model:'<ol><li>1/8 of 24 = 3.</li><li>Without icing = 3/8 = 3 × 3 = 9. (Iced = 5/8 = 15.)</li></ol><p class="final">Answer: 9 cupcakes</p>' },

  /* --- Decimals --- */
  { id:'I-DE-1', topic:'Decimals', level:'Intermediate', type:'number',
    question:'A car travels 0.8 km every minute. How far does it travel in 15 minutes? (in km)',
    hint:'Distance = speed × time.',
    accept:['12'],
    model:'<p>0.8 × 15 = 12 km.</p><p class="final">Answer: 12 km</p>' },

  { id:'I-DE-2', topic:'Decimals', level:'Intermediate', type:'number',
    question:'Chocolate bars cost £0.85 each. What is the greatest number you can buy with £5?',
    hint:'Keep adding 0.85 until you would go over £5 — you can\'t spend more than you have.',
    accept:['5'],
    partial:[{value:'6', note:'6 bars cost £5.10, which is more than £5. You can only afford 5.'}],
    model:'<p>5 bars = £4.25, 6 bars = £5.10 (too much). So the most you can buy is 5.</p><p class="final">Answer: 5 bars</p>' },

  { id:'I-DE-3', topic:'Decimals', level:'Intermediate', type:'number',
    question:'A plank 2.5 m long is cut into pieces each 0.5 m long. How many pieces are there?',
    hint:'Divide the total length by the piece length.',
    accept:['5'],
    model:'<p>2.5 ÷ 0.5 = 5.</p><p class="final">Answer: 5 pieces</p>' },

  { id:'I-DE-4', topic:'Decimals', level:'Intermediate', type:'number',
    question:'The temperature was 4.5 °C and then dropped by 7.2 °C. What is the temperature now? (in °C)',
    hint:'4.5 − 7.2 will go below zero (negative).',
    accept:['-2.7'],
    model:'<p>4.5 − 7.2 = −2.7.</p><p class="final">Answer: −2.7 °C</p>' },

  { id:'I-DE-5', topic:'Decimals', level:'Intermediate', type:'money',
    question:'0.4 of a sum of money is £6. What is the full sum of money?',
    hint:'If 0.4 (four tenths) is £6, what is one tenth?',
    accept:['15'],
    model:'<ol><li>0.1 of the money = £6 ÷ 4 = £1.50.</li><li>The whole (1.0) = £1.50 × 10 = £15.</li></ol><p class="final">Answer: £15</p>' },

  { id:'I-DE-6', topic:'Decimals', level:'Intermediate', type:'number',
    question:'A water bottle holds 1.5 litres. You drink 0.35 litres, three times during the day. How many litres are left?',
    hint:'First find how much you drank in total.',
    accept:['0.45'],
    model:'<ol><li>Drunk: 0.35 × 3 = 1.05 L.</li><li>Left: 1.5 − 1.05 = 0.45 L.</li></ol><p class="final">Answer: 0.45 litres</p>' },

  /* --- Ratios --- */
  { id:'I-RA-1', topic:'Ratios', level:'Intermediate', type:'money',
    question:'£40 is shared between Amy and Ben in the ratio 3:1. How much does Amy get?',
    hint:'Total parts = 3 + 1 = 4. Find the value of one part first.',
    accept:['30'],
    model:'<ol><li>Parts: 3 + 1 = 4. One part = £40 ÷ 4 = £10.</li><li>Amy has 3 parts = 3 × £10 = £30.</li></ol><p class="final">Answer: £30</p>' },

  { id:'I-RA-2', topic:'Ratios', level:'Intermediate', type:'number',
    question:'60 marbles are shared in the ratio 2:3. How many marbles are in the LARGER share?',
    hint:'5 parts in total. The larger share is 3 of them.',
    accept:['36'],
    model:'<ol><li>Parts: 2 + 3 = 5. One part = 60 ÷ 5 = 12.</li><li>Larger share = 3 × 12 = 36.</li></ol><p class="final">Answer: 36 marbles</p>' },

  { id:'I-RA-3', topic:'Ratios', level:'Intermediate', type:'number',
    question:'A recipe uses flour and butter in the ratio 5:2. If you use 250 g of flour, how much butter do you need? (in g)',
    hint:'How many grams is one "part"? 250 g matches the 5.',
    accept:['100'],
    model:'<ol><li>5 parts = 250 g, so 1 part = 50 g.</li><li>Butter = 2 parts = 2 × 50 = 100 g.</li></ol><p class="final">Answer: 100 g</p>' },

  { id:'I-RA-4', topic:'Ratios', level:'Intermediate', type:'number',
    question:'The ratio of cats to dogs in a shelter is 4:5. There are 20 cats. How many dogs are there?',
    hint:'Find the value of one part using the cats (4 parts = 20).',
    accept:['25'],
    model:'<ol><li>4 parts = 20, so 1 part = 5.</li><li>Dogs = 5 parts = 25.</li></ol><p class="final">Answer: 25 dogs</p>' },

  { id:'I-RA-5', topic:'Ratios', level:'Intermediate', type:'number',
    question:'Two amounts are in the ratio 7:3 and add up to 50. What is the smaller amount?',
    hint:'Total parts = 10. The smaller amount is 3 parts.',
    accept:['15'],
    model:'<ol><li>Parts: 7 + 3 = 10. One part = 50 ÷ 10 = 5.</li><li>Smaller = 3 × 5 = 15.</li></ol><p class="final">Answer: 15</p>' },

  { id:'I-RA-6', topic:'Ratios', level:'Intermediate', type:'number',
    question:'Concrete is made with sand and cement in the ratio 4:1. You have 5 kg of cement. How much sand do you need? (in kg)',
    hint:'The cement is the "1" part, and it equals 5 kg.',
    accept:['20'],
    model:'<p>1 part (cement) = 5 kg, so sand = 4 parts = 20 kg.</p><p class="final">Answer: 20 kg</p>' },

  /* --- Percentages --- */
  { id:'I-PE-1', topic:'Percentages', level:'Intermediate', type:'money',
    question:'A coat costs £80. There is a 15% discount. How much money do you SAVE?',
    hint:'Find 10% of 80, then 5% (half of that), and add them.',
    accept:['12'],
    model:'<ol><li>10% of £80 = £8.</li><li>5% = £4. So 15% = £8 + £4 = £12.</li></ol><p class="final">Answer: £12 saved</p>' },

  { id:'I-PE-2', topic:'Percentages', level:'Intermediate', type:'money',
    question:'A coat costs £80 with 15% off. What is the SALE PRICE?',
    hint:'First find the saving (15% of £80), then subtract it from £80.',
    accept:['68'],
    partial:[{value:'12', note:'That is the saving, not the price. Take it off £80: 80 − 12.'}],
    model:'<ol><li>15% of £80 = £12 (the saving).</li><li>Sale price = £80 − £12 = £68.</li></ol><p class="final">Answer: £68</p>' },

  { id:'I-PE-3', topic:'Percentages', level:'Intermediate', type:'money',
    question:'A phone bill of £40 increases by 10%. What is the new bill?',
    hint:'Find 10% of 40, then add it on.',
    accept:['44'],
    model:'<p>10% of £40 = £4. New bill = £40 + £4 = £44.</p><p class="final">Answer: £44</p>' },

  { id:'I-PE-4', topic:'Percentages', level:'Intermediate', type:'number',
    question:'30% of the pupils chose football. That was 60 pupils. How many pupils are there altogether?',
    hint:'If 30% = 60, find 10% first, then multiply up to 100%.',
    accept:['200'],
    model:'<ol><li>30% = 60, so 10% = 20.</li><li>100% = 20 × 10 = 200.</li></ol><p class="final">Answer: 200 pupils</p>' },

  { id:'I-PE-5', topic:'Percentages', level:'Intermediate', type:'money',
    question:'A jacket costs £50. VAT of 20% is added. What is the total price?',
    hint:'20% of 50 is the VAT. Add it to £50.',
    accept:['60'],
    model:'<p>20% of £50 = £10. Total = £50 + £10 = £60.</p><p class="final">Answer: £60</p>' },

  { id:'I-PE-6', topic:'Percentages', level:'Intermediate', type:'percent',
    question:'You score 18 out of 25 in a quiz. What percentage is that?',
    hint:'Turn 18/25 into "out of 100" — multiply top and bottom by 4.',
    accept:['72','72%'],
    model:'<p>18/25 = 72/100 = 72%.</p><p class="final">Answer: 72%</p>' },

  { id:'I-PE-7', topic:'Percentages', level:'Intermediate', type:'number',
    question:'A town has 5000 people. The population grows by 4%. How many MORE people are there?',
    hint:'You only need the increase: 4% of 5000.',
    accept:['200'],
    model:'<p>1% of 5000 = 50, so 4% = 200.</p><p class="final">Answer: 200 more people</p>' },

  /* ======================= ADVANCED (25) ======================= */

  { id:'A-PE-1', topic:'Percentages', level:'Advanced', type:'money',
    question:'A shop sells a toy for £120. This price gives the shop a 20% profit on what they paid for it. How much did the shop PAY for the toy?',
    hint:'The £120 is the cost PLUS 20% of the cost = 120% of the cost. So £120 = 120%, not 100%.',
    accept:['100'],
    partial:[{value:'96', note:'Trap! You took 20% off £120. But £120 is 120% of the cost, so divide by 1.2 instead.'}],
    model:'<ol><li>Selling price = cost + 20% of cost = 120% of cost.</li><li>So 120% = £120, meaning 1% = £1, and 100% = £100.</li><li>Check: £100 + 20% (£20) = £120. ✓</li></ol><p class="final">Answer: £100</p>' },

  { id:'A-PE-2', topic:'Percentages', level:'Advanced', type:'money',
    question:'A coat is reduced by 20% in a sale and now costs £80. What was the ORIGINAL price?',
    hint:'After 20% OFF, £80 is what is LEFT, which is 80% of the original. So £80 = 80%, not 100%.',
    accept:['100'],
    partial:[{value:'96', note:'Trap! You added 20% of £80. But £80 is only 80% of the original — find 100% by dividing by 0.8.'}],
    model:'<ol><li>20% off means £80 = 80% of the original price.</li><li>So 1% = £80 ÷ 80 = £1, and 100% = £100.</li><li>Check: £100 − 20% (£20) = £80. ✓</li></ol><p class="final">Answer: £100</p>' },

  { id:'A-PE-3', topic:'Percentages', level:'Advanced', type:'money',
    question:'After a 12% pay rise, Maria earns £28,000. What was her salary BEFORE the rise?',
    hint:'£28,000 is the old salary plus 12% = 112% of the old salary.',
    accept:['25000','25,000'],
    model:'<ol><li>£28,000 = 112% of the old salary.</li><li>1% = 28,000 ÷ 112 = £250.</li><li>100% = £250 × 100 = £25,000.</li></ol><p class="final">Answer: £25,000</p>' },

  { id:'A-PE-4', topic:'Percentages', level:'Advanced', type:'money',
    question:'A laptop costs £540 including 20% VAT. What was the price BEFORE VAT was added?',
    hint:'£540 = price + 20% VAT = 120% of the pre-VAT price. Do NOT just take 20% off £540.',
    accept:['450'],
    partial:[{value:'432', note:'Trap! Taking 20% off £540 gives £432, but £540 is 120% of the real price. Divide £540 by 1.2.'}],
    model:'<ol><li>£540 = 120% of the pre-VAT price.</li><li>1% = 540 ÷ 120 = £4.50.</li><li>100% = £450.</li><li>Check: £450 + 20% (£90) = £540. ✓</li></ol><p class="final">Answer: £450</p>' },

  { id:'A-PE-5', topic:'Percentages', level:'Advanced', type:'money',
    question:'A shop sells a jumper for £36, which is a 25% LOSS on what they paid. How much did the shop pay for it?',
    hint:'A 25% loss means they sold it for 75% of what they paid. So £36 = 75% of the cost.',
    accept:['48'],
    model:'<ol><li>£36 = 75% of the cost.</li><li>1% = 36 ÷ 75 = £0.48, so 100% = £48.</li><li>Check: £48 − 25% (£12) = £36. ✓</li></ol><p class="final">Answer: £48</p>' },

  { id:'A-PE-6', topic:'Percentages', level:'Advanced', type:'money',
    question:'A house went up in value by 10% in the first year, then by another 10% in the second year. It is now worth £121,000. What was it worth at the START?',
    hint:'Two rises of 10% means multiply by 1.1 twice. Work backwards by dividing by 1.1 twice.',
    accept:['100000','100,000'],
    model:'<ol><li>Each year multiplies value by 1.1, so over two years × 1.1 × 1.1 = × 1.21.</li><li>Start × 1.21 = £121,000, so start = 121,000 ÷ 1.21 = £100,000.</li></ol><p class="final">Answer: £100,000</p>' },

  { id:'A-PE-7', topic:'Percentages', level:'Advanced', type:'money',
    question:'A price starts at £200. It is increased by 25%, then the new price is decreased by 20%. What is the final price?',
    hint:'Do it in two steps. The 20% comes off the NEW price, not the original.',
    accept:['200'],
    model:'<ol><li>+25%: £200 × 1.25 = £250.</li><li>−20% of £250 = £50, so £250 − £50 = £200.</li></ol><p class="final">Answer: £200 (it happens to return to the start!)</p>' },

  { id:'A-RA-1', topic:'Ratios', level:'Advanced', type:'number',
    question:'Sweets are shared so that Ann : Bob : Cara = 2 : 3 : 5. Cara gets 24 more sweets than Ann. How many sweets are there in total?',
    hint:'The DIFFERENCE between Cara and Ann is 5 − 2 = 3 parts, and that equals 24.',
    accept:['80'],
    model:'<ol><li>Cara − Ann = 5 − 2 = 3 parts = 24, so 1 part = 8.</li><li>Total parts = 2 + 3 + 5 = 10, so total = 10 × 8 = 80.</li></ol><p class="final">Answer: 80 sweets</p>' },

  { id:'A-RA-2', topic:'Ratios', level:'Advanced', type:'number',
    question:'Two numbers are in the ratio 3:7 and add up to 60. What is the LARGER number?',
    hint:'Total parts = 10. The larger number is 7 parts.',
    accept:['42'],
    model:'<ol><li>Parts: 3 + 7 = 10. One part = 60 ÷ 10 = 6.</li><li>Larger = 7 × 6 = 42.</li></ol><p class="final">Answer: 42</p>' },

  { id:'A-PE-8', topic:'Percentages', level:'Advanced', type:'number',
    question:'Increasing an amount by 40% is the same as multiplying it by what (single) number?',
    hint:'100% stays, plus 40% extra = 140% = 1.40.',
    accept:['1.4'],
    model:'<p>100% + 40% = 140% = 1.4. So a 40% increase = × 1.4.</p><p class="final">Answer: 1.4</p>' },

  { id:'A-PE-9', topic:'Percentages', level:'Advanced', type:'money',
    question:'A TV is reduced by 30% and now costs £280. By how many POUNDS was it reduced?',
    hint:'First find the original price (£280 = 70% of it), then the reduction is the difference.',
    accept:['120'],
    model:'<ol><li>£280 = 70% of original, so 1% = £4, original = £400.</li><li>Reduction = £400 − £280 = £120 (which is 30% of £400). ✓</li></ol><p class="final">Answer: £120</p>' },

  { id:'A-FR-1', topic:'Fractions', level:'Advanced', type:'number',
    question:'At a party, 3/5 of the people are adults. There are 18 children. How many people are at the party altogether?',
    hint:'If adults are 3/5, then children are 2/5 — and that equals 18.',
    accept:['45'],
    model:'<ol><li>Children = 2/5 of the people = 18, so 1/5 = 9.</li><li>Whole (5/5) = 9 × 5 = 45.</li></ol><p class="final">Answer: 45 people</p>' },

  { id:'A-RA-3', topic:'Ratios', level:'Advanced', type:'number',
    question:'A recipe for 4 people uses 600 g of rice. How much rice is needed for 10 people? (in g)',
    hint:'Find the rice for 1 person first.',
    accept:['1500'],
    model:'<ol><li>1 person = 600 ÷ 4 = 150 g.</li><li>10 people = 150 × 10 = 1500 g.</li></ol><p class="final">Answer: 1500 g</p>' },

  { id:'A-RA-4', topic:'Ratios', level:'Advanced', type:'number',
    question:'In a class the ratio of students who passed to those who failed was 9:1. 27 students passed. How many students were in the class altogether?',
    hint:'9 parts = 27, so find one part, then add the fail part.',
    accept:['30'],
    model:'<ol><li>9 parts = 27, so 1 part = 3.</li><li>Total = 9 + 1 = 10 parts = 30.</li></ol><p class="final">Answer: 30 students</p>' },

  { id:'A-PE-10', topic:'Percentages', level:'Advanced', type:'money',
    question:'A shirt costs £20. The price goes UP by 10%. Then, in a sale, 10% is taken OFF the new price. What is the final price?',
    hint:'The two 10%s are of different amounts, so you do not return to £20.',
    accept:['19.8','19.80'],
    partial:[{value:'20', note:'It is not £20. The +10% and −10% are taken from different amounts, so the result is slightly less.'}],
    model:'<ol><li>+10%: £20 × 1.1 = £22.</li><li>−10% of £22 = £2.20, so £22 − £2.20 = £19.80.</li></ol><p class="final">Answer: £19.80</p>' },

  { id:'A-PE-11', topic:'Percentages', level:'Advanced', type:'money',
    question:'A phone loses 20% of its value every year. It cost £300 when new. What is it worth after 2 years?',
    hint:'Losing 20% means keeping 80% (× 0.8) each year. Do it twice.',
    accept:['192'],
    model:'<ol><li>Year 1: £300 × 0.8 = £240.</li><li>Year 2: £240 × 0.8 = £192.</li></ol><p class="final">Answer: £192</p>' },

  { id:'A-DE-1', topic:'Decimals', level:'Advanced', type:'number',
    question:'0.75 of a tank holds 30 litres. How many litres does the FULL tank hold?',
    hint:'0.75 = 3/4. If 3/4 is 30 litres, find 1/4 first.',
    accept:['40'],
    model:'<ol><li>3/4 = 30 L, so 1/4 = 10 L.</li><li>Full tank (4/4) = 40 L.</li></ol><p class="final">Answer: 40 litres</p>' },

  { id:'A-PE-12', topic:'Percentages', level:'Advanced', type:'number',
    question:'A number increased by 60% becomes 96. What was the original number?',
    hint:'96 is 160% of the original. Divide by 1.6.',
    accept:['60'],
    model:'<ol><li>96 = 160% of the number.</li><li>1% = 96 ÷ 160 = 0.6, so 100% = 60.</li></ol><p class="final">Answer: 60</p>' },

  { id:'A-PE-13', topic:'Percentages', level:'Advanced', type:'percent',
    question:'A train ticket rose from £40 to £50. What was the percentage increase?',
    hint:'Percentage change is always out of the ORIGINAL price (£40). The rise was £10.',
    accept:['25','25%'],
    partial:[{value:'20', note:'You divided by the new price (£50). Percentage change uses the ORIGINAL: 10/40.'}],
    model:'<ol><li>Increase = £50 − £40 = £10.</li><li>As a % of the original: 10/40 = 0.25 = 25%.</li></ol><p class="final">Answer: 25%</p>' },

  { id:'A-PE-14', topic:'Percentages', level:'Advanced', type:'money',
    question:'A sale sign says "Pay only 65% of the price." A bike\'s sale price is £286. What was the FULL price?',
    hint:'£286 = 65% of the full price. Find 1% then 100%.',
    accept:['440'],
    model:'<ol><li>£286 = 65% of full price.</li><li>1% = 286 ÷ 65 = £4.40, so 100% = £440.</li></ol><p class="final">Answer: £440</p>' },

  { id:'A-RA-5', topic:'Ratios', level:'Advanced', type:'number',
    question:'A drink is mixed juice : water = 1 : 4. To make 2.5 litres of drink, how many litres of juice are needed?',
    hint:'Total parts = 1 + 4 = 5. Find the size of one part of the 2.5 L.',
    accept:['0.5','1/2'],
    model:'<ol><li>Parts: 1 + 4 = 5. One part = 2.5 ÷ 5 = 0.5 L.</li><li>Juice = 1 part = 0.5 L.</li></ol><p class="final">Answer: 0.5 litres</p>' },

  { id:'A-RA-6', topic:'Ratios', level:'Advanced', type:'number',
    question:'A farmer keeps sheep and cows in the ratio 5:2. He has 35 animals in total. How many COWS are there?',
    hint:'Total parts = 7. Cows are 2 parts.',
    accept:['10'],
    model:'<ol><li>Parts: 5 + 2 = 7. One part = 35 ÷ 7 = 5.</li><li>Cows = 2 × 5 = 10.</li></ol><p class="final">Answer: 10 cows</p>' },

  { id:'A-PE-15', topic:'Percentages', level:'Advanced', type:'money',
    question:'A coat was £120. It is reduced by 1/3, and then a further 10% is taken off at the till. What is the final price?',
    hint:'Reducing by 1/3 leaves 2/3. Do that first, then take 10% off the result.',
    accept:['72'],
    model:'<ol><li>Reduce by 1/3: keep 2/3 of £120 = £80.</li><li>10% off £80 = £8, so £80 − £8 = £72.</li></ol><p class="final">Answer: £72</p>' },

  { id:'A-PE-16', topic:'Percentages', level:'Advanced', type:'percent',
    question:'In a maths test, a student improved from 50% to 60%. By what percentage did their score increase, compared with the original score?',
    hint:'The score went up by 10 percentage points, but as a fraction of the ORIGINAL 50, that is 10/50.',
    accept:['20','20%'],
    partial:[{value:'10', note:'It rose by 10 percentage POINTS, but the percentage INCREASE is 10 out of the original 50 = 20%.'}],
    model:'<ol><li>Increase = 60 − 50 = 10 points.</li><li>As a % of the original 50: 10/50 = 20%.</li></ol><p class="final">Answer: 20%</p>' },

  { id:'A-PE-17', topic:'Percentages', level:'Advanced', type:'money',
    question:'A shopkeeper buys apples at £2 per kg and wants to make a 25% profit. What should the selling price be, per kg?',
    hint:'Selling price = cost + 25% of cost = 125% of £2.',
    accept:['2.5','2.50'],
    model:'<ol><li>25% of £2 = £0.50 (the profit).</li><li>Selling price = £2 + £0.50 = £2.50.</li></ol><p class="final">Answer: £2.50</p>' },

  /* ---- Extra Advanced: reverse percentages (find the original / the whole) ---- */

  { id:'A-PE-18', topic:'Percentages', level:'Advanced', type:'money',
    question:'A jacket is reduced by 30% in a sale and now costs £49. What was the original price?',
    hint:'After 30% off, £49 is the 70% that is left. So £49 = 70% of the original.',
    accept:['70'],
    partial:[{value:'63.7', note:'Trap! You added 30% of £49. But £49 is only 70% of the original — divide by 0.7 instead.'}],
    model:'<ol><li>£49 = 70% of the original.</li><li>1% = 49 ÷ 70 = £0.70, so 100% = £70.</li><li>Check: £70 − 30% (£21) = £49. ✓</li></ol><p class="final">Answer: £70</p>' },

  { id:'A-PE-19', topic:'Percentages', level:'Advanced', type:'money',
    question:'A meal costs £54 in total, which includes a 20% service charge. What was the cost of the food BEFORE the service charge?',
    hint:'£54 = food + 20% of food = 120% of the food price.',
    accept:['45'],
    model:'<ol><li>£54 = 120% of the food price.</li><li>1% = 54 ÷ 120 = £0.45, so 100% = £45.</li><li>Check: £45 + 20% (£9) = £54. ✓</li></ol><p class="final">Answer: £45</p>' },

  { id:'A-PE-20', topic:'Percentages', level:'Advanced', type:'money',
    question:'A shop makes a 40% profit by selling a bag for £70. How much did the shop pay for the bag?',
    hint:'£70 is the cost plus 40% profit = 140% of the cost.',
    accept:['50'],
    partial:[{value:'42', note:'Trap! You took 40% off £70. But £70 is 140% of the cost — divide by 1.4.'}],
    model:'<ol><li>£70 = 140% of the cost.</li><li>1% = 70 ÷ 140 = £0.50, so 100% = £50.</li><li>Check: £50 + 40% (£20) = £70. ✓</li></ol><p class="final">Answer: £50</p>' },

  { id:'A-PE-21', topic:'Percentages', level:'Advanced', type:'money',
    question:'After spending 35% of her pocket money, Mia has £52 left. How much did she start with?',
    hint:'If she spent 35%, the £52 left is the other 65%.',
    accept:['80'],
    model:'<ol><li>£52 = 65% of her money.</li><li>1% = 52 ÷ 65 = £0.80, so 100% = £80.</li></ol><p class="final">Answer: £80</p>' },

  { id:'A-PE-22', topic:'Percentages', level:'Advanced', type:'money',
    question:'A car is now worth £9,600 after losing 20% of its value. What was it worth when it was new?',
    hint:'Losing 20% leaves 80%. So £9,600 = 80% of the original value.',
    accept:['12000','12,000'],
    model:'<ol><li>£9,600 = 80% of the original.</li><li>1% = 9600 ÷ 80 = £120, so 100% = £12,000.</li></ol><p class="final">Answer: £12,000</p>' },

  { id:'A-PE-23', topic:'Percentages', level:'Advanced', type:'money',
    question:'A price rose by 15% to £92. What was the price before the rise?',
    hint:'£92 = 115% of the old price.',
    accept:['80'],
    model:'<ol><li>£92 = 115% of the old price.</li><li>1% = 92 ÷ 115 = £0.80, so 100% = £80.</li></ol><p class="final">Answer: £80</p>' },

  { id:'A-PE-24', topic:'Percentages', level:'Advanced', type:'money',
    question:'A TV costs £363 after a 10% price increase. What was the price before?',
    hint:'£363 = 110% of the old price. Divide by 1.1.',
    accept:['330'],
    model:'<ol><li>£363 = 110% of the old price.</li><li>1% = 363 ÷ 110 = £3.30, so 100% = £330.</li></ol><p class="final">Answer: £330</p>' },

  { id:'A-PE-25', topic:'Percentages', level:'Advanced', type:'number',
    question:'60% of a number is 45. What is the number?',
    hint:'If 60% = 45, find 10% first (45 ÷ 6), then build up to 100%.',
    accept:['75'],
    model:'<ol><li>60% = 45, so 10% = 45 ÷ 6 = 7.5.</li><li>100% = 7.5 × 10 = 75.</li></ol><p class="final">Answer: 75</p>' },

  { id:'A-PE-26', topic:'Percentages', level:'Advanced', type:'money',
    question:'A coat is reduced by a quarter (25%) and now costs £90. What was the original price?',
    hint:'Reduced by 25% means £90 is the 75% that remains.',
    accept:['120'],
    model:'<ol><li>£90 = 75% of the original.</li><li>1% = 90 ÷ 75 = £1.20, so 100% = £120.</li><li>Check: £120 − 25% (£30) = £90. ✓</li></ol><p class="final">Answer: £120</p>' },

  { id:'A-PE-27', topic:'Percentages', level:'Advanced', type:'money',
    question:'After a 5% pay rise, a worker earns £21,000. What was the salary before the rise?',
    hint:'£21,000 = 105% of the old salary.',
    accept:['20000','20,000'],
    model:'<ol><li>£21,000 = 105% of the old salary.</li><li>1% = 21,000 ÷ 105 = £200, so 100% = £20,000.</li></ol><p class="final">Answer: £20,000</p>' },

  { id:'A-PE-28', topic:'Percentages', level:'Advanced', type:'money',
    question:'A bill comes to £150 including 20% VAT. How much of that is the VAT? (in £)',
    hint:'First find the price before VAT (£150 = 120% of it), then the VAT is the difference.',
    accept:['25'],
    partial:[{value:'30', note:'£30 is 20% of £150, but VAT is 20% of the price BEFORE VAT (£125), not of the total.'}],
    model:'<ol><li>Before VAT: £150 ÷ 1.2 = £125.</li><li>VAT = £150 − £125 = £25 (which is 20% of £125). ✓</li></ol><p class="final">Answer: £25</p>' },

  { id:'A-PE-29', topic:'Percentages', level:'Advanced', type:'money',
    question:'A house lost 10% of its value and is now worth £180,000. What was it worth before?',
    hint:'£180,000 = 90% of the old value.',
    accept:['200000','200,000'],
    model:'<ol><li>£180,000 = 90% of the value.</li><li>1% = 180,000 ÷ 90 = £2,000, so 100% = £200,000.</li></ol><p class="final">Answer: £200,000</p>' },

  { id:'A-PE-30', topic:'Percentages', level:'Advanced', type:'money',
    question:'A jumper is sold for £33 with one third off. What was the original price?',
    hint:'One third off means you pay two thirds. So £33 = 2/3 of the original.',
    accept:['49.5','49.50'],
    model:'<ol><li>£33 = 2/3 of the original, so 1/3 = £33 ÷ 2 = £16.50.</li><li>Whole = £16.50 × 3 = £49.50.</li></ol><p class="final">Answer: £49.50</p>' },

  { id:'A-PE-31', topic:'Percentages', level:'Advanced', type:'money',
    question:'A train ticket costs £35 after a 25% increase. What was the original price?',
    hint:'£35 = 125% of the original. Divide by 1.25.',
    accept:['28'],
    model:'<ol><li>£35 = 125% of the original.</li><li>1% = 35 ÷ 125 = £0.28, so 100% = £28.</li></ol><p class="final">Answer: £28</p>' },

  { id:'A-PE-32', topic:'Percentages', level:'Advanced', type:'money',
    question:'A phone costs £480 in a sale after 20% off. What was the price before the sale?',
    hint:'£480 = 80% of the original (the part you still pay).',
    accept:['600'],
    partial:[{value:'576', note:'Trap! You added 20% of £480. But £480 is 80% of the original — divide by 0.8.'}],
    model:'<ol><li>£480 = 80% of the original.</li><li>1% = 480 ÷ 80 = £6, so 100% = £600.</li><li>Check: £600 − 20% (£120) = £480. ✓</li></ol><p class="final">Answer: £600</p>' },

  { id:'A-PE-33', topic:'Percentages', level:'Advanced', type:'money',
    question:'In a 30%-off sale, a customer saved £45 on a coat. What was the original price of the coat?',
    hint:'The £45 saving IS the 30%. So 30% = £45 — find 100%.',
    accept:['150'],
    model:'<ol><li>30% = £45, so 10% = £15.</li><li>100% = £15 × 10 = £150.</li></ol><p class="final">Answer: £150</p>' },

  { id:'A-PE-34', topic:'Percentages', level:'Advanced', type:'money',
    question:'Rent is £900 after a 12.5% increase. What was the rent before?',
    hint:'£900 = 112.5% of the old rent. Divide by 1.125.',
    accept:['800'],
    model:'<ol><li>£900 = 112.5% of the old rent.</li><li>Old rent = 900 ÷ 1.125 = £800.</li><li>Check: £800 + 12.5% (£100) = £900. ✓</li></ol><p class="final">Answer: £800</p>' },

  { id:'A-PE-35', topic:'Percentages', level:'Advanced', type:'number',
    question:'A number is decreased by 20% and the result is 64. What was the original number?',
    hint:'64 = 80% of the original.',
    accept:['80'],
    model:'<ol><li>64 = 80% of the number.</li><li>1% = 64 ÷ 80 = 0.8, so 100% = 80.</li></ol><p class="final">Answer: 80</p>' },

  { id:'A-PE-36', topic:'Percentages', level:'Advanced', type:'money',
    question:'A shop sells a clock for £96, making a 20% profit. What did the shop pay for it?',
    hint:'£96 = 120% of the cost.',
    accept:['80'],
    model:'<ol><li>£96 = 120% of the cost.</li><li>1% = 96 ÷ 120 = £0.80, so 100% = £80.</li><li>Check: £80 + 20% (£16) = £96. ✓</li></ol><p class="final">Answer: £80</p>' },

  { id:'A-PE-37', topic:'Percentages', level:'Advanced', type:'number',
    question:'A town\'s population fell by 4% to 4,800 people. How many people lived there before?',
    hint:'4,800 = 96% of the old population.',
    accept:['5000','5,000'],
    model:'<ol><li>4,800 = 96% of the old population.</li><li>1% = 4,800 ÷ 96 = 50, so 100% = 5,000.</li></ol><p class="final">Answer: 5,000 people</p>' },

  { id:'A-PE-38', topic:'Percentages', level:'Advanced', type:'money',
    question:'A savings account grew by 10% one year, then by 10% the next year, reaching £242. How much was first put in?',
    hint:'Two 10% rises means × 1.1 × 1.1 = × 1.21. Work backwards by dividing by 1.21.',
    accept:['200'],
    model:'<ol><li>Over two years the money is multiplied by 1.1 × 1.1 = 1.21.</li><li>Start = £242 ÷ 1.21 = £200.</li></ol><p class="final">Answer: £200</p>' },

  { id:'A-PE-39', topic:'Percentages', level:'Advanced', type:'money',
    question:'A price is increased by 50% and the new price is £30. What was the original price?',
    hint:'£30 = 150% of the original.',
    accept:['20'],
    model:'<ol><li>£30 = 150% of the original.</li><li>1% = 30 ÷ 150 = £0.20, so 100% = £20.</li></ol><p class="final">Answer: £20</p>' },

  { id:'A-PE-40', topic:'Percentages', level:'Advanced', type:'money',
    question:'After 8% interest is added for one year, a savings account holds £540. How much was deposited at the start?',
    hint:'£540 = 108% of the deposit.',
    accept:['500'],
    model:'<ol><li>£540 = 108% of the deposit.</li><li>1% = 540 ÷ 108 = £5, so 100% = £500.</li></ol><p class="final">Answer: £500</p>' },

  { id:'A-PE-41', topic:'Percentages', level:'Advanced', type:'money',
    question:'A shop marks up everything by 25% above cost. A shirt sells for £15. What did the shop pay for it?',
    hint:'£15 = 125% of the cost.',
    accept:['12'],
    model:'<ol><li>£15 = 125% of the cost.</li><li>1% = 15 ÷ 125 = £0.12, so 100% = £12.</li></ol><p class="final">Answer: £12</p>' },

  { id:'A-PE-42', topic:'Percentages', level:'Advanced', type:'money',
    question:'A laptop is reduced by 15% and then a further 15% is taken off the new price. If the original price was £400, what is the final price?',
    hint:'Do it in two steps — the second 15% comes off the already-reduced price, so use × 0.85 twice.',
    accept:['289'],
    partial:[{value:'280', note:'You took off 30% in one go. But two separate 15% reductions are × 0.85 × 0.85 = × 0.7225, not × 0.70.'}],
    model:'<ol><li>First: £400 × 0.85 = £340.</li><li>Second: £340 × 0.85 = £289.</li></ol><p class="final">Answer: £289</p>' }

];

// Make available to the app.
if (typeof window !== 'undefined') { window.QUESTIONS = QUESTIONS; }
