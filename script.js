document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    lucide.createIcons();
    
    // Tab functionality
    const tabButtons = document.querySelectorAll('#platform-tabs button');
    const tabContents = document.querySelectorAll('#platform-content > div');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Deactivate all tabs
            tabButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-selected', 'false');
            });
            
            // Hide all tab contents
            tabContents.forEach(content => {
                content.classList.add('hidden');
            });
            
            // Activate clicked tab
            button.classList.add('active');
            button.setAttribute('aria-selected', 'true');
            
            // Show corresponding content
            const targetId = button.getAttribute('data-tabs-target').substring(1);
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.classList.remove('hidden');
            }
        });
    });
    
    // FAQ Accordion Functionality
    const faqItems = document.querySelectorAll('.faq-item button');
    
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            const answer = item.nextElementSibling;
            const isExpanded = item.getAttribute('aria-expanded') === 'true';
            
            // Toggle current item
            item.setAttribute('aria-expanded', !isExpanded);
            answer.classList.toggle('hidden');
        });
    });
});
