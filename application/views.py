from django.shortcuts import render
from .forms import ApplicationForm, EnquiryForm


def home(request):
    return render(request, 'home.html')


def apply(request):

    if request.method == 'POST':
        form = ApplicationForm(request.POST)

        if form.is_valid():
            form.save()
            return render(request, 'success.html')

    else:
        form = ApplicationForm()

    return render(request, 'apply.html', {'form': form})


def enquiry(request):

    if request.method == 'POST':
        form = EnquiryForm(request.POST)

        if form.is_valid():
            form.save()
            return render(request, 'success.html')

    else:
        form = EnquiryForm()

    return render(request, 'enquiry.html', {'form': form})