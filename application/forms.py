from django import forms
from .models import Application, Enquiry

class ApplicationForm(forms.ModelForm):
    class Meta:
        model = Application
        fields = '__all__'


class EnquiryForm(forms.ModelForm):
    class Meta:
        model = Enquiry
        fields = '__all__'